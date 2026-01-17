import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  Camera,
  Drone,
  Truck,
  Glasses,
  Play,
  Pause,
  Video,
  Layers,
} from "lucide-react";

interface SimulationPageProps {
  onBack: () => void;
}

type SourceType = "drone" | "rgb" | "robot" | "ip";

type Source = {
  id: string;
  name: string;
  type: SourceType;
  status: "online" | "offline";
};

export function SimulationPage({ onBack }: SimulationPageProps) {
  const sources: Source[] = useMemo(
    () => [
      { id: "drone-a", name: "Drone A (1080p/60)", type: "drone", status: "online" },
      { id: "rgb-1", name: "RGB Camera 1", type: "rgb", status: "online" },
      { id: "rgb-2", name: "RGB Camera 2", type: "rgb", status: "offline" },
      { id: "robot-x", name: "RoboMachine X", type: "robot", status: "online" },
      { id: "ip-12", name: "IP Cam #12", type: "ip", status: "online" },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState<string>(sources[0].id);
  const [playing, setPlaying] = useState(true);
  const [detectionOn, setDetectionOn] = useState(true);
  const [vrOn, setVrOn] = useState(false);

  const selected = sources.find((s) => s.id === selectedId)!;

  const IconByType: Record<SourceType, React.ReactNode> = {
    drone: <Drone className="h-4 w-4" />,
    rgb: <Camera className="h-4 w-4" />,
    robot: <Truck className="h-4 w-4" />,
    ip: <Video className="h-4 w-4" />,
  };

  return (
    <main className="min-h-screen w-full bg-[#050510] text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0a1128]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Назад
          </button>

          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-400 to-purple-500" />
            <span className="font-bold tracking-tight">WALLSENSE • SIMULATION</span>
          </div>

          <div className="text-sm text-slate-400">
            Источник: <span className="text-white">{selected.name}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[320px_1fr_320px]">
        {/* Left: Sources */}
        <aside className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="border-b border-white/10 p-4">
            <h2 className="text-lg font-bold">Доступные источники</h2>
            <p className="mt-1 text-sm text-slate-400">
              Дроны, RGB камеры, робомашины, IP потоки
            </p>
          </div>

          <div className="p-3 space-y-2">
            {sources.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedId(s.id)}
                className={[
                  "w-full rounded-xl border px-3 py-3 text-left transition",
                  s.id === selectedId
                    ? "border-cyan-500/40 bg-cyan-500/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300">{IconByType[s.type]}</span>
                    <span className="font-medium">{s.name}</span>
                  </div>

                  <span
                    className={[
                      "text-xs font-medium",
                      s.status === "online" ? "text-green-400" : "text-red-400",
                    ].join(" ")}
                  >
                    {s.status}
                  </span>
                </div>

                <div className="mt-2 flex gap-2 text-xs text-slate-400">
                  <span className="rounded bg-white/5 px-2 py-1">FPS: 60</span>
                  <span className="rounded bg-white/5 px-2 py-1">Latency: 45ms</span>
                  <span className="rounded bg-white/5 px-2 py-1">Mode: Live</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Center: Stream */}
        <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <div className="flex items-center gap-2 text-slate-300">
              <Layers className="h-4 w-4" />
              <span className="font-medium">Live Stream</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPlaying((v) => !v)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
              >
                {playing ? (
                  <span className="flex items-center gap-2"><Pause className="h-4 w-4" />Pause</span>
                ) : (
                  <span className="flex items-center gap-2"><Play className="h-4 w-4" />Play</span>
                )}
              </button>

              <button
                onClick={() => setDetectionOn((v) => !v)}
                className={[
                  "rounded-lg border px-3 py-2 text-sm transition",
                  detectionOn
                    ? "border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/15"
                    : "border-white/10 bg-white/5 hover:bg-white/10",
                ].join(" ")}
              >
                Детекция: {detectionOn ? "ON" : "OFF"}
              </button>
            </div>
          </div>

          <div className="relative aspect-video w-full bg-black">
            {/* Mock video */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-500">
              VIDEO STREAM (mock)
            </div>

            {/* Mock overlay */}
            {detectionOn && (
              <>
                <div className="absolute left-[18%] top-[22%] h-[35%] w-[22%] border-2 border-cyan-400/80">
                  <div className="absolute -top-6 left-0 rounded bg-cyan-400/20 px-2 py-1 text-xs text-cyan-200">
                    person 0.91
                  </div>
                </div>

                <div className="absolute left-[55%] top-[30%] h-[25%] w-[28%] border-2 border-purple-400/80">
                  <div className="absolute -top-6 left-0 rounded bg-purple-400/20 px-2 py-1 text-xs text-purple-200">
                    box 0.84
                  </div>
                </div>
              </>
            )}

            <div className="absolute left-4 top-4 rounded-lg bg-black/40 px-3 py-2 text-xs text-slate-200 backdrop-blur">
              <div>Source: {selected.id}</div>
              <div>FPS: 60 • Inference: 15ms • Latency: 45ms</div>
            </div>
          </div>

          {/* Camera switch (mock) */}
          <div className="border-t border-white/10 p-4">
            <div className="flex flex-wrap gap-2">
              {sources.filter(s => s.status === "online").map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedId(s.id)}
                  className={[
                    "rounded-full px-3 py-1 text-sm border transition",
                    s.id === selectedId
                      ? "border-cyan-500/40 bg-cyan-500/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10",
                  ].join(" ")}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Right: VR */}
        <aside className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="border-b border-white/10 p-4">
            <h2 className="text-lg font-bold">Доступные VR</h2>
            <p className="mt-1 text-sm text-slate-400">Подключение гарнитуры и VR-стрим</p>
          </div>

          <div className="p-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Glasses className="h-5 w-5 text-purple-300" />
                  <div>
                    <div className="font-medium">Meta Quest 3</div>
                    <div className="text-xs text-slate-400">Status: connected (mock)</div>
                  </div>
                </div>
                <span className="text-xs text-green-400">online</span>
              </div>

              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => setVrOn(true)}
                  className="flex-1 rounded-lg bg-cyan-500 py-2 text-sm font-bold text-black hover:bg-cyan-400"
                >
                  Stream to VR
                </button>
                <button
                  onClick={() => setVrOn(false)}
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-sm hover:bg-white/10"
                >
                  Stop
                </button>
              </div>

              <div className="mt-3 text-xs text-slate-400">
                VR stream: <span className="text-white">{vrOn ? "ON" : "OFF"}</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium">VR Detected Objects (mock)</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li className="flex justify-between"><span>person</span><span className="text-cyan-300">0.91</span></li>
                <li className="flex justify-between"><span>box</span><span className="text-purple-300">0.84</span></li>
                <li className="flex justify-between"><span>forklift</span><span className="text-cyan-300">0.77</span></li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium">Что дальше подключим</div>
              <div className="mt-2 text-sm text-slate-400 space-y-1">
                <div>• WebSocket stream из FastAPI</div>
                <div>• Реальные FPS/Latency</div>
                <div>• Управление детекцией (classes/conf)</div>
                <div>• Сохранение событий</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
