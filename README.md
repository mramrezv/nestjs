NestJS Projects — Based on NestJS: The Complete Developer’s Guide

This repository contains multiple small NestJS projects created while completing NestJS: The Complete Developer’s Guide by Stephen Grider.
Each project is an independent application demonstrating a core NestJS concept such as modules, controllers, dependency injection, validation, and request handling.

Projects Included
1. car-val/ — Car Validation API

Demonstrates:

DTO validation (class-validator)

Pipes and transformations

Basic module and service architecture

2. di/ — Dependency Injection Examples

Demonstrates:

Provider patterns

Custom providers

Factory/value providers

How the NestJS DI container works

3. messages/ — Messaging CRUD API

Demonstrates:

REST controllers

Services and in-memory data

CRUD operations

Module structure

4. scratch/ — General Sandbox

A folder used for quick tests and experiments throughout the course.
Good for exploring decorators, modules, interceptors, and other features.

How to Run Any Project

Each project is isolated.
To run a project:

cd <project-folder>
npm install
npm run start:dev


Example:

cd car-val
npm install
npm run start:dev

Tech Stack

NestJS

TypeScript

Node.js

class-validator & class-transformer

npm

Purpose

This repository serves to:

Document progress through the NestJS Developer’s Guide course

Practice core NestJS features with hands-on examples

Provide reference code for interviews or future projects

Structure
nestjs-projects/
   car-val/
   di/
   messages/
   scratch/
   README.md
