#!/bin/bash
sudo docker build -t slash/nodejs .
sudo docker stop nodejs
sudo docker rm nodejs
sudo docker run -d --restart=always --name nodejs -p 80:8000 slash/nodejs
