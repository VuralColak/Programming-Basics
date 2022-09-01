class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }
    learnAttackSkill(attackSkill) {
        const doesSkillAlreadyExist = this.skills.some(
            (skill) => skill.name === attackSkill.name
        );

        if (doesSkillAlreadyExist)
            console.log(`${this.name} kann diesen Skill bereits.`);

        this.skills.push(attackSkill);
        console.log(`${this.name} hat den Skill ${attackSkill.attackName} gelernt`);
    }

    attack(attack, pokemon) {
        let i = Math.floor(Math.random() * this.skills.length);
        this.skills[i].attackName = attack;
        this.pokemon = pokemon.name;
        this.health = this.health - pokemon.skills[i].healthConsumption;
        
        if (this.magic < this.skills[i].magicConsumption) {
            console.log(`nicht genug Magie, kann keinen Angriff starten!`);
        } else {  
            this.magic = this.magic - this.skills[i].magicConsumption;
            console.log(`${this.pokemon} hat ${this.skills[i].healthConsumption} Schaden erhalten.`);
        }
    }

    getMagic(){
        this.magic += 20;
        console.log(`${this.name} hat 20 Magie zurückbekommen.`);
    }

    showStatus() {
        console.log(`${this.name}-Status`);
        console.log(`Magie: ${this.magic}`);
        console.log(`Gesundheit: ${this.health}`);
    }
}

class AttackSkill {
    constructor(attackName, healthConsumption, magicConsumption) {
        this.attackName = attackName;
        this.healthConsumption = healthConsumption;
        this.magicConsumption = magicConsumption;
    }
}

// const pikachu = new Pokemon("Pikachu", 100, 50);
// const lightning = new AttackSkill("lightning", 40, 30);
// console.log(pikachu);
// console.log(pikachu.learnAttackSkill(lightning));
// console.log(pikachu.learnAttackSkill(lightning));
// console.log(pikachu);
// pikachu.showStatus();

// console.log('------');

// let bulbasaur = new Pokemon("bulbasaur", 95, 105);
// let poison = new AttackSkill ("poison", 20, 20);
// console.log(bulbasaur);
// console.log(bulbasaur.learnAttackSkill(poison));
// console.log(bulbasaur.learnAttackSkill(poison));
// console.log(bulbasaur);

// console.log('------');

// pikachu.attack(lightning, bulbasaur);
// bulbasaur.attack(poison, pikachu);



let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);


let lightning = new AttackSkill("lightning", 40, 30);
let poison = new AttackSkill ("poison", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poison);


pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poison", pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack("lightning", bulbasaur);
pikachu.attack("lightning", bulbasaur);
pikachu.getMagic();
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poison", pikachu);