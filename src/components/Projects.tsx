import React, { useCallback, useEffect, useMemo, useState } from 'react';

const Projects = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const tabs = ['Mobile', 'Web'];
  useEffect(() => {
    console.log('Tab changed to:', tabs[currentTab]);
  }, [currentTab]);
  const handleCurrentTab = (index: number) => {
    setCurrentTab(index);
  };
  const __renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return (
          <React.Fragment>
            <section className="flexf flex-col gap-4 mb-4">
              <h3 className="text-xl font-semibold text-cyan-600">
                Survey App (Survely)
              </h3>
              <p className="text-xs text-gray-700">
                This is a project to do task with theme dark and light switch
                and ui ux paradigms and async storage use.
              </p>
            </section>
            <aside>
              <div
                data-snack-id="@jsburbano/github.com-jhoanburbano-tc-survely-app"
                data-snack-platform="android"
                data-snack-preview="true"
                data-snack-theme="dark"
                data-snack-supportedplatforms="mydevice,ios,android"
                className="rounded-xl bg-gray-700 overflow-hidden border-2 border-gray-800 w-[full] h-[420px]"
              ></div>
            </aside>
            <script async src="https://snack.expo.dev/embed.js"></script>
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <section className="flexf flex-col gap-4 mb-4">
              <h3 className="text-xl font-semibold text-cyan-600">
                Social Insigths
              </h3>
              <p className="text-xs text-gray-700">
                This is a project to do task with theme dark and light switch
                and ui ux paradigms and async storage use.
              </p>
            </section>
            <aside>
              <iframe
                src="https://social-insights.vercel.app/"
                ancestor-origins=""
                className="w-full h-[420px] rounded-xl"
              ></iframe>
            </aside>
          </React.Fragment>
        );
      case 2:
        return <div>Backend Projects</div>;
      default:
        return <div>Mobile Projects</div>;
    }
  };
  return (
    <main>
      <ul className="flex gap-2">
        {tabs.map((t, i) => {
          let styles =
            'p-2 rounded-lg shadow-[#00000055] shadow-sm text-xs font-bold cursor-pointer';
          if (currentTab === i) {
            styles +=
              ' hover:bg-sky-200 active:bg-sky-400 text-gray-900  bg-sky-300';
          } else {
            styles +=
              ' hover:bg-zinc-200 active:bg-zinc-400 text-gray-900  bg-zinc-300';
          }
          return (
            <li key={i}>
              <button onClick={() => handleCurrentTab(i)} className={styles}>
                {t}
              </button>
            </li>
          );
        })}
      </ul>
      {__renderTabContent()}
    </main>
  );
};

export default Projects;
