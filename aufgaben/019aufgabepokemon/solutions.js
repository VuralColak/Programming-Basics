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
            return `${this.name} kann diesen Skill bereits.`;

        this.skills.push(attackSkill);
        return `${this.name} hat den Skill ${attackSkill.name} gelernt`;
    }
}

class AttackSkill {
    constructor(name, healthConsumption, magicConsumption) {
        this.name = name;
        this.healthConsumption = healthConsumption;
        this.magicConsumption = magicConsumption;
    }
}

const pikachu = new Pokemon("Pikachu", 100, 50);
const lightning = new AttackSkill("lightning", 40, 30);
console.log(pikachu);
console.log(pikachu.learnAttackSkill(lightning));
console.log(pikachu.learnAttackSkill(lightning));
console.log(pikachu);