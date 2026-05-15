FROM nginx:alpine

RUN apk add --no-cache openssl

# Create directories
RUN mkdir -p /etc/nginx/ssl_template /etc/nginx/ssl

# Generate keys during BUILD
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/ssl_template/nginx.key \
    -out /etc/nginx/ssl_template/nginx.crt \
    -subj "/C=PK/ST=Punjab/L=Rawalpindi/O=CivicPulse/CN=192.168.56.250"

# Use 'printf' to create the entrypoint. It handles newlines much better than 'echo'.
RUN printf "#!/bin/sh\n\
if [ ! -f /etc/nginx/ssl/nginx.crt ]; then\n\
    cp /etc/nginx/ssl_template/* /etc/nginx/ssl/\n\
fi\n\
exec nginx -g 'daemon off;'\n" > /entrypoint.sh && chmod +x /entrypoint.sh

COPY default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]
