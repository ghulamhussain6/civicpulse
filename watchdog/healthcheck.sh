#!/bin/sh
while true; do
  echo "--- $(date) ---"
  echo "Checking CivicPulse Services..."
  # Simple internal ping check to the backend
  if nc -z civic-backend 3000; then
    echo "Backend: OK"
  else
    echo "Backend: DOWN"
  fi
  sleep 60
done
