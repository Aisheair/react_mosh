import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  //AfterRender
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(()=>{
    document.title = "Focus Input Example";
  })
  return (
    <>
      <input ref={ref} type="text" className="form-control" />
    </>
  );
}

export default App;
