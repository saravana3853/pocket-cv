import React from "react";

const Education =()=>{
	return (
 <div class="m-4 p-4 w-full  max-w-sm rounded overflow-hidden shadow-lg bg-amber-300">
  <div class="px-4 py-4 h-full w-full">
    <div class="font-bold text-xl mb-2">Education Summary</div>
    <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <svg class="flex-shrink-0 w-4 h-4 text-red-500 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
            </span>
            <div className="font-normal text-sm">BTech in Information Technology from Madras Institute of Technology</div>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <svg class="flex-shrink-0 w-4 h-4 text-red-500 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
            </span>
            <div className="font-normal text-sm">Certified by IIM-C on Advanced Programme on Fintech & Financial Blockchain</div>
          </li>
    </ul>
  </div>
  </div>
	);
}

export default Education;
