import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "@/components/Navbar";
import WeatherBox from "@/components/WeatherBox";
import CodePeek from "@/components/CodePeek";
import ErrorBoundary from "@/components/ErrorBoundary";
import Layout from "@/components/Layout";

const App: React.FC = () => (
  <Layout>
    <Navbar title="TypeScript + React Portfolio Demo" />
    <main className="mx-auto grid max-w-5xl gap-8 p-4 sm:grid-cols-2">
      <ErrorBoundary>
        <WeatherBox />
      </ErrorBoundary>
      <CodePeek filePath="src/components/WeatherBox.tsx" />
    </main>
  </Layout>
);

export default App;
