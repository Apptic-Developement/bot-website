// imports
import React from "react";
import Hero from "../../../components/Headers/Hero";
import FeaturesSection from "../../../components/Features";

// props
type Props = {};

// home page
function Home({}: Props) {
    return (
        <main>
            <Hero />
            <FeaturesSection />
        </main>
    );
}

// export
export default Home;
