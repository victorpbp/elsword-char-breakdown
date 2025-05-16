'use client';
import { useParams } from "next/navigation";

// We need a dictionary to map the uid to the class name
// By using the different classes they have, acronyms
// In case the class doesn't exist, we can send the user back to /classes
// Alternatively, we can settle on sending them a 404 page

export default function SpecificClassPage() {

    const params = useParams();
    const { uid } = params;
    console.log(uid);

    return (
      <>
        <p>This is the page for {uid}</p>
      </>
    );
  }
  