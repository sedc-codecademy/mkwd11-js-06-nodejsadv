# NestJs Workshop - Team Api

## Basic requirements

Create a team api that will have the following resources: player, team, manager

For all of these resources you have to add crud operations and the relations between them are as follows

- One team can have only one manager and vice versa
- One team can have many players and one player can have only one team

Models for resources:

Manager

```
{
    firstName: string
    lastName: string
    age: number
    salary: number
    yearsOfExperience: number
    team: Team
}
```

Team

```
{
    name: string
    ranking: number
    budget: number
    manager: Manager (owner @JoinColumn here)
    players: Player[]
}
```

Player

```
{
    firstName: string
    lastName: string
    salary: number
    ranking: number
    team: Team (owner @JoinColumn here)
}

```

- The data for all the above resources and endpoints needs to be validated

- To finish the basic requirements you need to have created at least one team, one manager and five players and they need to be connected properly and the relations loaded properly on the findById endpoints

## Bonus Requirement (DO NOT ATTEMPT BEFORE BASIC PART)

- Add another resource called Match which will contain data about matches

The relations for the match is as follows

- Many matches can have many players

Model for matches:

```

{
    league: string
    time: string
    result: string
    players: Player[]
}

```

Don't forget to add the relations in the original models

- To finish the bonus part you need to have created at least 2 matches

### Super bonus ( whoever gets here +200 points)

- Add authentication and authorization so that only logged in users can work with any of the resources above
