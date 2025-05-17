'use client';
import { useParams } from "next/navigation";

export default function SpecificRaidPage() {

    const params = useParams();
    const { uid } = params;
    console.log(uid);

    return (
      <>
        <p>This is the page for the {uid} raid</p>
      </>
    );
  }
  