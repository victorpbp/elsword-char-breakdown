

export default async function Glossary() {
  return (
    <>
      <div
        className="flex flex-col gap-5"
        
      >
        <div
          className="flex flex-col gap-2 items-center justify-center text-center p-5"
        >

          <h1 className="text-3xl font-bold">Glossary</h1>
          <p className="text-base text-gray-400">
          Here you'll find definition for the many terminologies utilized in this page
          </p>
        </div>

        <div
          className="flex flex-col gap-5 justify-start text-left p-5 w-full max-w-5xl"
        >
          <div
            className="flex flex-col gap-2 items-start p-5"  
          >
            <h2
              className="text-2xl font-bold"
            >Item 1 of the Glossary</h2>
            <p
              className="p-5"
            >Definition of said item Definition of said item Definition of said item Definition of said item Definition of said item Definition of said item</p>
          </div>

          <div>
            <h2>Item 2 of the Glossary</h2>
            <p>Definition of said item</p>
          </div>
        </div>
        
      </div>
    </>
  );
}
