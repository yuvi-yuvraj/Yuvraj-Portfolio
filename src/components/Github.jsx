import { GitHubCalendar } from "react-github-calendar";

const Github = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 text-white mb-32">
      <h2 className="mb-8 text-6xl font-bold">
        Days I <span className="text-fuchsia-900">Code</span>
      </h2>

      <div className="rounded-2xl border border-fuchsia-500/20 bg-slate-900/50 p-6 shadow-lg">
        <GitHubCalendar
          username="yuvi-yuvraj"
          blockSize={18}
          blockMargin={6}
          color="#c084f5"
          fontSize={14}
        />
      </div>
    </section>
  );
};

export default Github;