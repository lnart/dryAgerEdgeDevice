# DryAgerEdgeDevice

## Introduction

This repository contains the hardware component management for DryAger systems. It facilitates the setup on a Raspberry Pi connected to various sensors. The device uses a local MongoDB server instance and a Node.js server to handle database connections, MQTT communication, and sensor data processing. Currently, sensor data reading is simulated with mock functions.

Related API repository: [Link to API Repository](#)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)

## Features

- Read sensor data from connected sensors (currently mocked).
- Process and analyze the sensor data.
- Send data to a specified MQTT server.

## Installation

### Prerequisites

- Raspberry Pi 4
- Node.js installed ([Node.js Documentation](https://nodejs.org/en/docs/))
- Docker installed ([Docker Documentation](https://docs.docker.com/get-docker/))
- MQTT server and API running ([API Repository](https://www.github/lnart/dryAger.com))

### Steps

1. Clone the repository to your Raspberry Pi:
   ```bash
   git clone [repository-url]
2. Navigate into the cloned directory
   ```bash
   cd DryAgerEdgeDevice
3. Install npm packages
   ```bash
   npm install
4. Configure your dotenv file like in the configuration section
## Usage

## Dependencies
- dotenv: Environment variable management.
- express: Web server framework.
- mongoose: MongoDB object modeling tool.
- mqtt: MQTT client for Node.js.
- nodemon: Utility that automatically restarts Node.js applications when files change.
- onoff: GPIO access and interrupt detection with Node.js.

## Configuration
- DB_STRING: Connection string for the local MongoDB server. Default is mongodb://localhost:27017/localRecords.
- MQTT_STRING: MQTT server URL.
- MQTT_USERNAME: Username for MQTT server.
- MQTT_PASSWORD: Password for MQTT server.
- DB_DOCKER: Connection string for MongoDB when using Docker. Default is mongodb://host.docker.internal:27017/localRecords.
