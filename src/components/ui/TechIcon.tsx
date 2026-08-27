"use client";

import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiPostman,
  SiJsonwebtokens,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiElasticsearch,
  SiCplusplus,
  SiC,
  SiPython,
  SiFlutter,
  SiDart,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiRender,
  SiEthereum,
  SiRedis,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa6";
import { Code2, Database, Cpu, Layers, Sparkles, Bot, BarChart3, LineChart, Search, Terminal } from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
}

export function TechIcon({ name, className = "w-6 h-6", size, color }: TechIconProps) {
  const iconProps = {
    className,
    size,
    style: color ? { color } : undefined,
  };

  switch (name.toLowerCase()) {
    case "sihtml5":
    case "html":
    case "html5":
      return <SiHtml5 {...iconProps} />;

    case "sicss3":
    case "css":
    case "css3":
      return <FaCss3Alt {...iconProps} />;

    case "sijavascript":
    case "javascript":
    case "js":
      return <SiJavascript {...iconProps} />;

    case "sitypescript":
    case "typescript":
    case "ts":
      return <SiTypescript {...iconProps} />;

    case "sireact":
    case "react":
    case "react.js":
    case "reactjs":
    case "react 18":
      return <SiReact {...iconProps} />;

    case "sinextdotjs":
    case "next.js":
    case "nextjs":
    case "next":
    case "next.js 14":
      return <SiNextdotjs {...iconProps} />;

    case "sitailwindcss":
    case "tailwind":
    case "tailwind css":
    case "tailwindcss":
      return <SiTailwindcss {...iconProps} />;

    case "sinodedotjs":
    case "node.js":
    case "nodejs":
    case "node":
      return <SiNodedotjs {...iconProps} />;

    case "siexpress":
    case "express":
    case "express.js":
    case "expressjs":
      return <SiExpress {...iconProps} />;

    case "sinestjs":
    case "nestjs":
    case "nest.js":
      return <SiNestjs {...iconProps} />;

    case "sifastapi":
    case "fastapi":
      return <SiFastapi {...iconProps} />;

    case "sielasticsearch":
    case "elasticsearch":
      return <SiElasticsearch {...iconProps} />;

    case "siflutter":
    case "flutter":
      return <SiFlutter {...iconProps} />;

    case "sidart":
    case "dart":
      return <SiDart {...iconProps} />;

    case "sipostman":
    case "postman":
    case "rest apis":
    case "rest api":
    case "restapis":
      return <SiPostman {...iconProps} />;

    case "sijsonwebtokens":
    case "jwt":
    case "jwt authentication":
    case "jwt & auth":
      return <SiJsonwebtokens {...iconProps} />;

    case "sipostgresql":
    case "postgresql":
    case "postgres":
    case "typeorm":
      return <SiPostgresql {...iconProps} />;

    case "simongodb":
    case "mongodb":
    case "mongo":
      return <SiMongodb {...iconProps} />;

    case "simysql":
    case "sql / mysql":
    case "mysql":
    case "sql":
      return <SiMysql {...iconProps} />;

    case "sql & data analysis":
      return <Database {...iconProps} />;

    case "data analysis":
      return <BarChart3 {...iconProps} />;

    case "data visualization":
      return <LineChart {...iconProps} />;

    case "nlp":
    case "sentence transformers":
    case "semantic search":
      return <Search {...iconProps} />;

    case "sicplusplus":
    case "c++":
    case "cpp":
      return <SiCplusplus {...iconProps} />;

    case "sic":
    case "c":
      return <SiC {...iconProps} />;

    case "fajava":
    case "java":
      return <FaJava {...iconProps} />;

    case "sipython":
    case "python":
    case "py":
      return <SiPython {...iconProps} />;

    case "sigit":
    case "git":
      return <SiGit {...iconProps} />;

    case "sigithub":
    case "github":
      return <SiGithub {...iconProps} />;

    case "sidocker":
    case "docker":
      return <SiDocker {...iconProps} />;

    case "sivercel":
    case "vercel":
      return <SiVercel {...iconProps} />;

    case "sirender":
    case "render":
      return <SiRender {...iconProps} />;

    case "sifigma":
    case "figma":
      return <SiFigma {...iconProps} />;

    case "siethereum":
    case "blockchain":
    case "blockchain & web3":
    case "web3":
    case "ethereum":
      return <SiEthereum {...iconProps} />;

    case "siopenai":
    case "ai & llm integration":
    case "ai/ml":
    case "ai":
    case "llm":
    case "ai & data":
      return <Bot {...iconProps} />;

    case "siredis":
    case "redis":
      return <SiRedis {...iconProps} />;

    default:
      if (name.toLowerCase().includes("database") || name.toLowerCase().includes("sql")) {
        return <Database {...iconProps} />;
      }
      if (name.toLowerCase().includes("data") || name.toLowerCase().includes("analytics") || name.toLowerCase().includes("chart")) {
        return <BarChart3 {...iconProps} />;
      }
      if (name.toLowerCase().includes("search") || name.toLowerCase().includes("nlp")) {
        return <Search {...iconProps} />;
      }
      if (name.toLowerCase().includes("terminal") || name.toLowerCase().includes("xterm")) {
        return <Terminal {...iconProps} />;
      }
      if (name.toLowerCase().includes("code") || name.toLowerCase().includes("program") || name.toLowerCase().includes("monaco")) {
        return <Code2 {...iconProps} />;
      }
      if (name.toLowerCase().includes("cloud") || name.toLowerCase().includes("infra")) {
        return <Layers {...iconProps} />;
      }
      return <Sparkles {...iconProps} />;
  }
}
