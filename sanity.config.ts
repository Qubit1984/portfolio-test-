import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import schemas from "./sanity/schemas";

const config=defineConfig({
projectId:'l7ydftui',
dataset:'production',
title:'My Personol Website',
apiVersion:'2023-04-16',
basePath:'/admin',
plugins:[deskTool()],
schema:{types:schemas}
})

export default config;