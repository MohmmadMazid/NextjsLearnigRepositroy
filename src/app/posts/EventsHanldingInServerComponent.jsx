"use client";
export const EventsHanldingInServerComponent = () => {
  const handleClickEvent = () => {
    alert("hello ,hanldling event in the server side component");
  };
  return (
    <div>
      <button onClick={handleClickEvent}>click me</button>
    </div>
  );
};
