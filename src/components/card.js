import './card.css'

function Card() {
    return(
        <div className="card">
        <div className="column">
          <svg
            className="DesignSVG"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 1080 1080"
            xmlSpace="preserve"
          >
            <circle cx="540" cy="540" r="540" fill="#5BE9B9"></circle>
            <g fill="#172E3A">
              <path d="M788.07 299.39c-14.78-13.66-38.97-13.98-55.67-.47-5.74 4.64-11.03 9.83-16.46 14.84-36.95 34.05-73.88 68.12-110.84 102.17-15.22 14.02-30.33 28.15-45.76 41.94-8.03 7.17-8.3 6.89-15.92-.73-48.62-48.6-97.04-97.4-146.05-145.62-7.71-7.58-17.3-14.41-27.29-18.29-29.7-11.51-60.09-.32-80.18 27.74-19.19 26.81-16.19 61.58 7.81 85.68 48.53 48.73 97.24 97.28 145.85 145.92 6.32 6.33 6.08 6.7-.45 12.62-14.77 13.41-29.7 26.68-43.86 40.71-4.89 4.84-8.8 11.36-11.21 17.84-2.45 6.58-5.92 8.98-12.5 8.52-11.97-.84-22.9 2.39-33.01 8.78-13.29 8.4-23.58 19.82-30.22 33.73-8.05 16.85-14.66 34.41-21.43 51.84-7.94 20.45-20.83 36.11-41.17 45.17-2.9 1.29-5.73 2.97-8.17 4.98-13.31 10.9-3.38 24.87 9.37 30.11 4.01 1.65 7.96 3.27 12.18 4.23 14.27 3.24 29.06 4.88 43.93 4.92 14.63.04 29.3-1.36 43.61-4.42 43.74-9.35 112.11-40.21 108.6-94.32-.32-4.97 2.22-7.91 7.12-8.71 11.36-1.85 19.62-8.57 27.12-16.75 17.97-19.61 36.1-39.08 54.11-58.66 43.86-47.68 87.62-95.44 131.53-143.05 32.4-35.13 65.02-70.04 97.45-105.14 7.51-8.13 15.38-16.1 21.75-25.09 14.04-19.85 9.96-41.83-10.24-60.49zM352.1 405.75c-4.09 4.15-7.39 3.69-11.21-.28-15.18-15.76-36.77-30.81-29.97-55.94 2.12-7.86 6.88-14.94 13.14-20.15 6.88-5.72 15.82-9.23 24.74-8.6.03 0 .06 0 .09.01 7.85.58 15.17 4.25 21.67 8.7 7.27 4.98 35.97 21.99 24.39 33.42a4326.825 4326.825 0 00-42.85 42.84zm22.31 33.27c-3.95-3.92-4.48-6.89-.25-11.02 14.08-13.77 28.02-27.68 41.78-41.78 4.48-4.59 7.84-4.4 12.29.08 31.4 31.61 62.98 63.06 94.45 94.6 1.66 1.67 2.94 3.71 4.5 5.72-1.46 1.88-2.31 3.4-3.53 4.51-15.06 13.79-30.29 27.39-45.19 41.34-4.34 4.06-7.23 3.37-11.08-.5-30.9-31.07-61.89-62.06-92.97-92.95zm40.57 307.38c-24.14 21.13-52.3 33.1-84.03 36.51-12.85 1.38-25.83 1.48-39.64 2.2.57-2.85.5-3.51.79-3.78 21.38-20.12 29.47-47.25 39.06-73.62 4.84-13.31 11.48-25.56 22.03-35.43 9.9-9.26 21.11-11.28 33.45-6.35 19.53 7.8 32.15 22.55 39.15 41.88 5.43 15 1.26 28.02-10.81 38.59zm354.7-400.65c-16.3 18.12-32.8 36.07-49.31 53.99-34.54 37.48-69.11 74.92-103.71 112.34-25.9 28.02-51.9 55.97-77.79 84-21.38 23.15-42.83 46.24-63.95 69.63-12.39 13.72-17.64 15.15-31.88 3.26-8.53-7.12-15.54-16.28-22.34-25.2-4.57-6-3.38-12.37 2.52-17.77 28.7-26.26 57.3-52.63 85.91-78.99 21.55-19.85 43.03-39.78 64.58-59.63 35.5-32.69 71.07-65.29 106.54-98.01 22.8-21.04 45.46-42.23 68.21-63.33 9.29-8.62 20.79-6.65 25.24 4.31.64 1.57.89 3.3 1.58 5.99-1.63 2.82-3.07 6.6-5.6 9.41zM759.38 686.59c-5.97-13.8-14.65-26.94-24.37-38.48-11.52-13.67-25.55-25.23-38.36-37.82-11.24-11.05-22.43-22.17-33.42-33.46-4.55-4.67-8.1-4.6-11.96.69-2.6 3.57-5.51 6.98-8.66 10.07-5.22 5.13-4.51 9.02.71 14.07 17.87 17.3 35.2 35.17 52.94 52.61 4.56 4.48 4.52 7.86-.03 12.29-13.58 13.24-27.09 26.57-40.19 40.28-5.09 5.32-8.48 5.59-13.75.13-15.9-16.49-32.37-32.42-48.45-48.74-4.47-4.53-8.01-4.93-11.99.47-2.62 3.55-5.66 6.84-8.8 9.96-5.1 5.08-4.62 9.05.62 14.16 21.85 21.34 43.24 43.16 64.97 64.62 4.17 4.12 8.79 8.03 13.82 11.02 37.53 22.33 78.64 36.26 119.71 50.12 11.76 3.97 25.35-7.35 25.57-21.3-.25-1.27-.42-4.05-1.37-6.53-12.15-31.46-23.6-63.23-36.99-94.16zm-1.56 82.86c-2.2-.34-4.18-.28-5.84-.97-23.6-9.78-47.24-19.5-70.7-29.63-7.7-3.32-7.77-5.13-1.92-11.03 12.81-12.92 25.76-25.7 38.56-38.63 3.65-3.69 6.67-4.2 8.89 1.12 10.38 24.95 20.7 49.93 30.96 74.92.4 1.01.05 2.32.05 4.22z"></path>
              <path d="M587.06 271.05c6.18 1.78 11.01 6.62 12.88 12.77 3.27 10.82 6.1 22.91 12.58 32.3 1.27 1.84 3.97 1.9 5.26.07 6.56-9.32 8.4-21.74 12.56-32.29 2.01-5.1 7.89-10.87 13.01-12.82 10.64-4.04 23.64-5.57 31.61-13.95.26-.28.54-.6.53-.99-.01-.28-.17-.53-.33-.76-6.79-9.64-24.62-10.97-34.93-15.36-3.78-1.61-7.63-5.47-9.25-9.25-4.44-10.41-5.89-27.06-14.85-34.73-.25-.21-.53-.43-.86-.43-.29 0-.55.16-.79.32-9.44 6.4-11.92 23.44-14.97 33.62-1.8 6-5.2 9.65-11.28 11.41-10.08 2.92-26.85 5.13-33.18 14.48-.15.22-.29.45-.3.71-.01.34.21.64.43.9 7.05 8.39 21.4 10.98 31.88 14zM743.14 207.92c4.71 1.63 9.09 4.54 12.21 8.45 4.66 5.83 4.18 15.9 10.23 20.14.25.17.52.34.83.34.32-.01.6-.21.85-.42 3.73-3.17 3.83-8.19 5.47-12.41 1.77-4.54 4.78-8.72 8.59-11.76 5.65-4.5 14.5-4.54 19.91-8.81 1.02-.81 1.15-2.36.21-3.26-4.08-3.91-10.47-5.52-15.7-6.9-6.35-1.68-10.22-5.45-11.79-11.82-1.2-4.86-3-9.34-6.17-13.14-.9-1.07-2.56-.98-3.42.12-4.38 5.6-4.67 12.62-8.93 18.35-3.06 4.12-7.58 6.89-12.5 8.23-1.47.4-13.29 3.32-11.74 6.22 2.59 4.87 7.33 5.07 11.95 6.67z"></path>
            </g>
            <g>
              <circle cx="1733.12" cy="-813.04" r="45" fill="#5BE9B9"></circle>
              <g fill="#172E3A">
                <path d="M1753.96-828.53c0-3.35-2.15-5.5-5.5-5.5h-36.82c-3.35 0-5.51 2.15-5.51 5.5v29.99c0 3.35 2.15 5.51 5.5 5.51h18.36c6.17 0 12.34 0 18.52-.01.55 0 1.11-.04 1.63-.18 2.33-.6 3.82-2.62 3.82-5.15v-30.16zm-3.42 8.78v21.24c0 1.42-.63 2.06-2.05 2.06h-36.93c-1.37 0-2.02-.65-2.02-2.03v-21.3-.57h40.99c.01.22.01.41.01.6zm0-4.04h-40.95c-.01-.14-.04-.27-.04-.41 0-1.53-.01-3.06 0-4.59.01-1.12.71-1.82 1.84-1.82h37.3c1.13 0 1.84.7 1.84 1.83.02 1.64.01 3.29.01 4.99z"></path>
                <path d="M1715.17-806.19c-.68.7-.66 1.73.01 2.4.65.65 1.68.7 2.36.04 1.75-1.72 3.49-3.46 5.21-5.21.65-.67.66-1.65.01-2.31a511.84 511.84 0 00-5.21-5.21c-.43-.43-.98-.57-1.58-.41-1.31.35-1.73 1.89-.76 2.87 1.27 1.3 2.57 2.56 3.97 3.96-.22.16-.39.26-.53.4-1.17 1.15-2.33 2.3-3.48 3.47zM1726.78-803.29c1.08.01 2.17 0 3.25 0 1.1 0 2.21.01 3.31 0 1.06-.01 1.81-.71 1.83-1.68.02-.99-.75-1.73-1.83-1.73-2.19-.01-4.38-.01-6.56 0-1.09 0-1.85.72-1.85 1.71s.76 1.7 1.85 1.7zM1714.68-828.91c-.92 0-1.72.8-1.71 1.72.01.92.78 1.69 1.7 1.69.91 0 1.7-.78 1.71-1.68.01-.92-.78-1.73-1.7-1.73zM1719.87-828.91c-.92-.02-1.78.78-1.78 1.68 0 .93.75 1.72 1.66 1.74.95.02 1.74-.75 1.75-1.7.02-.88-.77-1.7-1.63-1.72zM1724.96-828.91c-.9-.02-1.73.77-1.74 1.66-.02.91.76 1.73 1.65 1.75.94.02 1.76-.77 1.77-1.69 0-.9-.78-1.7-1.68-1.72z"></path>
              </g>
              <path
                fill="#172E3A"
                d="M1746.17-838.08c.52.15.92.55 1.07 1.06.27.9.51 1.91 1.05 2.69.11.15.33.16.44.01.55-.78.7-1.81 1.05-2.69.17-.42.66-.91 1.08-1.07.89-.34 1.97-.46 2.63-1.16.02-.02.04-.05.04-.08 0-.02-.01-.04-.03-.06-.57-.8-2.05-.91-2.91-1.28a1.6 1.6 0 01-.77-.77c-.37-.87-.49-2.25-1.24-2.89-.02-.02-.04-.04-.07-.04-.02 0-.05.01-.07.03-.79.53-.99 1.95-1.25 2.8-.15.5-.43.8-.94.95-.84.24-2.24.43-2.77 1.21l-.03.06c0 .03.02.05.04.08.61.68 1.81.89 2.68 1.15zM1754.18-833.34c.39.14.76.38 1.02.7.39.49.35 1.33.85 1.68.02.01.04.03.07.03.03 0 .05-.02.07-.04.31-.26.32-.68.46-1.03.15-.38.4-.73.72-.98.47-.38 1.21-.38 1.66-.73.09-.07.1-.2.02-.27-.34-.33-.87-.46-1.31-.58-.53-.14-.85-.45-.98-.99-.1-.41-.25-.78-.51-1.09-.07-.09-.21-.08-.28.01-.37.47-.39 1.05-.74 1.53-.25.34-.63.57-1.04.69-.12.03-1.11.28-.98.52.19.4.58.41.97.55z"
              ></path>
            </g>
          </svg>
          <h1>Designer</h1>
          <p className="discription">
            I appreciate straightforward content organization, uncluttered
            design principles,
            <br /> and deliberate user interactions.
          </p>
          <p className="title">Things I enjoy designing:</p>
          <p className="discription">UX, UI, Web, Apps, Logos, Posters</p>
          <p className="title">Design Tools:</p>
          <ul>
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>Font Awsome</li>
            <li>Figma</li>
            <li>Pen & paper</li>
          </ul>
        </div>

        <div className="column">
          <svg
            className="DevelopmentSVG"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 1080 1080"
            xmlSpace="preserve"
          >
            <circle cx="540" cy="540" r="540" fill="#5BE9B9"></circle>
            <g fill="#172E3A">
              <path d="M790.01 354.08c0-40.25-25.78-66.05-65.99-66.05-147.27-.01-294.55-.01-441.82 0-40.2 0-66.06 25.83-66.06 65.98-.01 119.97-.01 239.94 0 359.91 0 40.2 25.83 66.06 65.99 66.07 73.42.01 146.85 0 220.27 0 74.06 0 148.13.05 222.19-.09 6.55-.01 13.3-.53 19.61-2.17 27.99-7.25 45.79-31.46 45.8-61.82.04-120.61.02-241.22.01-361.83zm-40.98 105.33v254.92c0 17.02-7.6 24.66-24.54 24.66H281.33c-16.49 0-24.2-7.76-24.2-24.35-.01-85.19 0-170.37 0-255.56v-6.79h491.9v7.12zm0-48.51h-491.4c-.17-1.67-.47-3.28-.48-4.89-.03-18.36-.08-36.72 0-55.08.06-13.47 8.54-21.89 22.12-21.9 149.21-.03 298.42-.03 447.62 0 13.55 0 22.05 8.45 22.11 21.92.09 19.81.03 39.61.03 59.95z"></path>
              <path d="M324.6 622.18c-8.2 8.41-7.94 20.77.06 28.77 7.83 7.84 20.16 8.44 28.28.48 21.04-20.62 41.87-41.47 62.5-62.5 7.85-8.01 7.91-19.77.08-27.76-20.62-21.05-41.52-41.82-62.46-62.53-5.19-5.13-11.75-6.85-18.94-4.94-15.68 4.15-20.74 22.66-9.17 34.49 15.22 15.56 30.8 30.76 47.61 47.5-2.61 1.95-4.68 3.16-6.33 4.8-13.93 13.83-27.92 27.63-41.63 41.69zM463.86 656.98c13.02.06 26.04.01 39.06.01 13.23 0 26.47.06 39.7-.02 12.67-.08 21.75-8.49 21.92-20.15.18-11.94-9-20.76-21.91-20.8-26.25-.07-52.5-.06-78.75-.01-13.03.03-22.25 8.6-22.25 20.47-.02 11.89 9.21 20.44 22.23 20.5zM318.68 349.52c-11.1-.01-20.62 9.58-20.54 20.66.08 11.04 9.4 20.3 20.44 20.31 10.96.01 20.42-9.31 20.52-20.22.11-11.09-9.38-20.74-20.42-20.75zM381 349.51c-11.09-.28-21.32 9.37-21.38 20.16-.06 11.11 9.03 20.59 19.97 20.83 11.34.24 20.89-9.04 21-20.43.1-10.46-9.27-20.3-19.59-20.56zM442.02 349.53c-10.82-.23-20.72 9.21-20.91 19.95-.2 10.89 9.13 20.81 19.76 21.02 11.22.23 21.12-9.22 21.21-20.25.09-10.86-9.23-20.48-20.06-20.72z"></path>
            </g>
            <path
              fill="#172E3A"
              d="M696.55 239.43c6.18 1.78 11.01 6.62 12.88 12.77 3.27 10.82 6.1 22.91 12.58 32.3 1.27 1.84 3.97 1.9 5.26.07 6.56-9.32 8.4-21.74 12.56-32.29 2.01-5.1 7.89-10.87 13.01-12.82 10.64-4.04 23.64-5.57 31.61-13.95.26-.28.54-.6.53-.99-.01-.28-.17-.53-.33-.76-6.79-9.64-24.62-10.97-34.93-15.36-3.78-1.61-7.63-5.47-9.25-9.25-4.44-10.41-5.89-27.06-14.85-34.73-.25-.21-.53-.43-.86-.43-.29 0-.55.16-.79.32-9.44 6.4-11.92 23.44-14.97 33.62-1.8 6-5.2 9.65-11.28 11.41-10.08 2.92-26.85 5.13-33.18 14.48-.15.22-.29.45-.3.71-.01.34.21.64.43.9 7.05 8.39 21.4 10.97 31.88 14zM792.63 296.3c4.71 1.63 9.09 4.54 12.21 8.45 4.66 5.83 4.18 15.9 10.23 20.14.25.17.52.34.83.34.32-.01.6-.21.85-.42 3.73-3.17 3.83-8.19 5.47-12.41 1.77-4.54 4.78-8.72 8.59-11.76 5.65-4.5 14.5-4.54 19.91-8.81 1.02-.81 1.15-2.36.21-3.26-4.08-3.91-10.47-5.52-15.7-6.9-6.35-1.68-10.22-5.45-11.79-11.82-1.2-4.86-3-9.34-6.17-13.14-.9-1.07-2.56-.98-3.42.12-4.38 5.6-4.67 12.62-8.93 18.35-3.06 4.12-7.58 6.89-12.5 8.23-1.46.4-13.29 3.32-11.74 6.22 2.6 4.86 7.33 5.07 11.95 6.67z"
            ></path>
          </svg>
          <h1>Frontend Developer</h1>
          <p className="discription">
            I prefer building things from the ground up with code <br />and take
            pleasure in translating concepts<br /> into interactive web experiences.
          </p>
          <p className="title">What i can code with:</p>
          <p className="discription">HTML, css/scss, javascript/typescript, jsx</p>
          <p className="title">Dev Tools:</p>
          <ul>
            <li>ReactJS</li>
            <li>Angular</li>
            <li>Node.js</li>
            <li>Tailwind</li>
            <li>Github</li>
            <li>vscode</li>
            <li>Terminal</li>
          </ul>
        </div>
      </div>
    )
}

export default Card;