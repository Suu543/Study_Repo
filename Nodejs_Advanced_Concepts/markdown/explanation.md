Global Execution Context - Creation + Execution
              |
              |
              v
   main Function Execution Context - Creation Phase
              |
              |
              v
    Event Queue가 돌고있다
              |
              |
              v
    setTimeout Heap에 할당 (1)
              |
              |
              v
    setImmediate Queue에 할당 (2)
              |
              |
              v
    fs.readFile I/O 동작 발견 I/O Pending Phase
              |
              |
              v
    fs.readFile을 만나면 Event Loop는 libUV에게 해당 작업을 던짐
    파일 읽기는 OS 커널에서 비동기 API를 제공하지 않기 때문에
    libUV는 별도의 Thread 해당 작업을 던짐 (Non Blocking)
              |
              |
              v
    Event Loop는 현재 I/O Pending Queue가 비어있기때문에 다음 Phase로 이동
              |
              |
              v
         Idle/Prepare
              |
              |
              v
         Poll Phase 여기서 setImmediate 있는 것을 발견함
              |
              |
              v
        setImmediate (5)를 Check Phase queue에 할당

// https://medium.com/p/418062f917d1/responses/show
// https://medium.com/p/e29b2b50bfe2/responses/show
// https://blog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2
// https://codeburst.io/understanding-non-deterministic-order-of-execution-of-settimeout-vs-setimmediate-in-node-js-49e8d5956cab
// https://stackoverflow.com/questions/28668759/what-does-this-statement-do-console-log-bindconsole
// https://evan-moon.github.io/2019/08/01/nodejs-event-loop-workflow/
// https://dev.to/lunaticmonk/understanding-the-node-js-event-loop-phases-and-how-it-executes-the-javascript-code-1j9
// https://stackoverflow.com/questions/31582672/what-is-the-different-between-javascript-event-loop-and-node-js-event-loop
// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
// https://www.tutorialsteacher.com/javascript/closure-in-javascript
// https://velog.io/@yesdoing/Iterator-Generator
// https://www.youtube.com/watch?v=s9Zy8ISjxIw
// https://dev.to/lunaticmonk/understanding-the-node-js-event-loop-phases-and-how-it-executes-the-javascript-code-1j9
// http://www.gogeometry.com/software/bootstrap/bootstrap-css-mind-map.html
// https://evan-moon.github.io/2019/08/01/nodejs-event-loop-workflow/
