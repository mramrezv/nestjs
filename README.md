📁 NestJS Projects — Based on NestJS: The Complete Developer’s Guide

This repository contains a collection of NestJS projects and practice applications built while completing NestJS: The Complete Developer’s Guide by Stephen Grider.

Each folder is a standalone NestJS project demonstrating a specific concept such as dependency injection, validation, module structure, routing, and more.
These examples serve as a hands-on learning portfolio and reference for best practices in NestJS.

📚 Included Projects
1. car-val/ — Car Validation API

A small API focusing on:

DTOs and validation using class-validator

Pipes and request transformation

Controllers, services, and modules

Error handling basics

2. di/ — Dependency Injection Examples

Practice project that explores:

Providers and injectable services

Custom provider patterns

Value & factory providers

Understanding how NestJS DI container works

3. messages/ — Messaging CRUD API

A simple CRUD application demonstrating:

REST controllers

Services and in-memory data store

Request mapping

Module setup and architecture fundamentals

4. scratch/ — General Sandbox

A playground used throughout the course for:

Quick experiments

Testing small features

Learning decorators, interceptors, and modules

Trying out concepts before applying them in real projects

🚀 Running Any Project

Each project is isolated and runnable independently.

Navigate into a project:

cd <project-folder>


Install dependencies:

npm install


Run the app:

npm run start:dev


Example:

cd car-val
npm install
npm run start:dev

🛠 Tech Stack

NestJS

TypeScript

Node.js

class-validator / class-transformer

npm

🎯 Purpose of This Repo

Document my progress through the NestJS Developer Guide course

Build practical examples that reinforce NestJS concepts

Serve as a reference for interviews and future NestJS projects

Maintain clean, modular, real-world-style code

📦 Folder Structure
nestjs-projects/
   car-val/
   di/
   messages/
   scratch/
   README.md

🤝 Notes

These projects closely follow the code and exercises from
NestJS: The Complete Developer’s Guide, with additional improvements and personal notes.
