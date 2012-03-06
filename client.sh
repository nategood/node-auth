#! /usr/bin/env bash

# Denied (no cert)
curl -v -s -k https://localhost:5678

# Approved (using CA signed cert)
curl -v -s -k --key ssl/client.key --cert ssl/client.crt https://localhost:5678