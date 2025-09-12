import React from "react";
import GroupCard from "./GroupCard/GroupCard";
import data from "./GroupCard/data.json";


export default function Groups() {
    // Récupération des groupes depuis l'API
    const groups = data.groups;


    return (
        <div className="bg-blue p-6 rounded-2xl w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4 border-red-500 border pb-2">
                <h1 className="text-white font-bold text-lg">Vos groupes</h1>
                <button className="bg-green text-white px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-green-600">
                    Créer un groupe
                </button>
            </div>

  
            <div className="space-y-4">
                {groups.map((group) => {
                    return (
                        <GroupCard
                            key={group.id}
                            id={group.id}
                            title={group.title}
                            date={group.date}
                            participants={group.participants}
                        />
                        );
                    })
                }
                
            </div>
        </div>
    );
}

 