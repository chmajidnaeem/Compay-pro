import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import News from '../components/News'
import Footer from '../components/Footer'

interface ListItemProps {
    heading: string,
    body: string,
}

const ListItem = ({ heading, body }: ListItemProps) => {
    return (
        <div className="w-full px-4 py-2 rounded-lg bg-blue-200 bg-opacity-25 flex flex-col justify-start items-start">
            <span className="text-base font-medium">{heading}</span>
            <span className="text-sm font-normal">{body}</span>
        </div>
    )
}

const Page = () => {
    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            <div className="w-full flex flex-col justify-center items-center py-10 px-5 my-5">
                <div className="flex flex-col md:flex-row w-full md:w-4/5 justify-evenly items-start mb-16">
                    <span className="w-full md:w-1/4 text-3xl font-normal mb-4">What we value</span>
                    <div className="w-full md:w-2/6 flex flex-col gap-4">
                        <ListItem heading="INTERESTING WORK" body="Meaty problems we can jump into and big ideas that we can fall in love with." />
                        <ListItem heading="GOOD PEOPLE" body="Clients and colleagues that are as engaged as we are in the problems we're solving." />
                        <ListItem heading="EMPATHY" body="Businesses that truly care about customers and their needs, and don't just pay lip service to user-centered design." />
                        <ListItem heading="TRUST IN THE PROCESS" body="We're comfortable with ambiguity and complexity - don't worry, we'll get to clarity if you'll do the work with us." />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:w-4/5 justify-evenly items-start mb-16">
                    <span className="w-full md:w-1/4 text-3xl font-normal mb-4">{"What it's like to work with us"}</span>
                    <div className="w-full md:w-2/6 flex flex-col gap-4">
                        <ListItem heading="WE'RE PASSIONATE" body="The word clients use most is “fun” - what can we say? We love this work and we bring our energy and our A game to every meeting." />
                        <ListItem heading="WE'RE SUPER COLLABORATIVE" body="We'd rather work with your team as a force multiplier than to work on our own and deliver a deck with the results. What this looks like is involving your team members in research, ideation, testing, synthesis, and asset creation as much as they are interested and able to participate. We shine at facilitating workshops with diverse stakeholders to win alignment and buy-in and model a user-centered process for the organization." />
                        <ListItem heading="WE'RE MEGA SYNTHESIZERS" body="There are a lot of strategists out there, and a lot of designers, but not a lot of people who can ladder from opportunities and business goals down to specific user interactions, and back up again. Our secret sauce is making complex, messy information clear and actionable for different types of people." />
                    </div>
                </div>
            </div>
            <News />
            <Footer />
        </div>
    );
}


export default Page