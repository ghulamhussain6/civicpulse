Vagrant.configure("2") do |config|
  config.vm.define "civicpulse-dockercompose" do |node|
    node.vm.box = "almalinux/9"
    node.vm.network "private_network", ip: "192.168.56.250"
    node.vm.network "forwarded_port", guest: 80, host: 8080
    node.vm.network "forwarded_port", guest: 3000, host: 3000
    
    node.vm.provider "virtualbox" do |vb|
      vb.memory = "4096"
      vb.cpus = 1
      vb.name = "civicpulse-core-engine-dockercompose"
    end

    node.vm.synced_folder ".", "/home/vagrant/civicpulse"

    node.vm.provision "shell", inline: <<-SHELL
      # 1. Identity & Timezone
      timedatectl set-timezone Asia/Karachi
      hostnamectl set-hostname civicpulse-core-engine-dockercompose
      echo "192.168.56.250 portal.civic.local" | sudo tee -a /etc/hosts
      echo "192.168.56.253 backup.civic.local" | sudo tee -a /etc/hosts

      # 2. Professional User 'ghulam'
      if ! id "ghulam" &>/dev/null; then
        useradd -u 1001 -m -s /bin/bash ghulam
        echo "ghulam:yourpassword" | chpasswd
        echo "ghulam ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/ghulam
      fi

      # 3. Base Software
      dnf install -y epel-release nfs-utils python3 python3-pip git ansible-core
      
      # 4. Docker Engine & Compose
      dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
      dnf install -y docker-ce docker-ce-cli containerd.io
      curl -SL "https://github.com/docker/compose/releases/download/v2.24.5/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
      chmod +x /usr/local/bin/docker-compose
      ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose

      systemctl enable --now docker
      usermod -aG docker vagrant
      usermod -aG docker ghulam

      # 5. NFS Mount Logic (Connecting to the NATIVE Export Zone)
      mkdir -p /mnt/remote-backups
      chown ghulam:ghulam /mnt/remote-backups

      # Update fstab to the new verified path
      if ! grep -q "/mnt/remote-backups" /etc/fstab; then
        echo "192.168.56.253:/srv/nfs/export_zone /mnt/remote-backups nfs defaults,_netdev 0 0" >> /etc/fstab
      fi
      
      # Reload systemd to recognize fstab changes and mount
      systemctl daemon-reload
      mount -a || echo "Waiting for Backup VM to be available..."

      echo "--------------------------------------------------"
      echo "CivicPulse Engine is online."
      echo "NFS Mount point ready at: /mnt/remote-backups"
      echo "--------------------------------------------------"
    SHELL

    if Vagrant.has_plugin?("vagrant-hostsupdater")
      node.hostsupdater.aliases = ["portal.civic.local"]
    end
  end
end