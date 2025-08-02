import React from 'react';
import '../styles/ourteam.css';
import head from '../assets/images/head2.jpg';
const teamMembers = [
    {
        name: 'Shri Virendra Singh',
        title: 'Founder & Chairman',
        imageUrl: head,
    },
    {
        name: 'Rajendra Singh',
        title: 'CEO',
        imageUrl: head,
    },
    {
        name: 'Prashant',
        title: 'CFO',
        imageUrl: head,
    },
    {
        name: 'Himanshu',
        title: 'Production Director',
        imageUrl: head,
    },
    {
        name: 'Rahul',
        title: 'Design & QA',
        imageUrl: head,
    },
    {
        name: 'Dhanashree',
        title: 'Manager',
        imageUrl: head,
    },
    {
        name: 'Pradip',
        title: 'Manager',
        imageUrl: head,
    },
    {
        name: 'Vikrant',
        title: 'Manager',
        imageUrl: head,
    },
    {
        name: 'Shashikant',
        title: 'Manager',
        imageUrl: head,
    },
];

export default function OurTeam() {
    return (
        <section className="team-section">
            <div className="team-header">
                <h2 className="team-title">Meet Our Leadership</h2>
                <p className="team-intro">
                    The driving force behind our innovation and commitment to quality.
                </p>
            </div>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-card" key={index}>
                        <div className="team-card-img-wrapper">
                            <img
                                src={member.imageUrl}
                                alt={`Portrait of ${member.name}`}
                                className="team-card-img"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/EBF4FF/1E293B?text=Error'; }}
                            />
                        </div>
                        <div className="team-card-info">
                            <h3 className="team-card-name">{member.name}</h3>
                            <p className="team-card-title">{member.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
