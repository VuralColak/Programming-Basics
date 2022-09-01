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
    showStatus() {
        return `${this.name} hat ${this.health} Leben und ${this.magic} Magie.`;
    }
    attack(attackSkillName, opponent) {
        if (this.health <= 0) {
            return `${this.name} ist schon tot. Tote Pokemon können nicht kämpfen.`;
        }

        const attackSkill = this.skills.find(
            (skill) => skill.name === attackSkillName
        );

        if (!attackSkill) {
            return `${this.name} kennt den Skill ${attackSkillName} noch nicht`;
        }

        if (this.magic < attackSkill.magicConsumption) {
            return `${this.name} hat nicht genügend Mana um ${opponent.name} anzugreifen.`;
        }

        if (opponent.health <= 0) {
            return `${opponent.name} ist bereits gestorben.`;
        }

        opponent.health -= attackSkill.healthConsumption;
        this.magic -= attackSkill.magicConsumption;

        if (opponent.health <= 0) {
            return `${this.name} hat ${opponent.name} erfolgreich angegriffen und vernichtet.`;
        }

        return `${this.name} hat ${opponent.name} erfolgreich angegriffen. ${opponent.name} hat noch ${opponent.health} Leben`;
    }
    addMagic(magic) {
        this.magic += magic;
        return `${this.name} freut sich über ${magic} Magie`;
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
const shiggy = new Pokemon("Shiggy", 200, 25);
const lightning = new AttackSkill("lightning", 400, 30);
const tornado = new AttackSkill("tornado", 40, 30);
console.log(shiggy.learnAttackSkill(tornado));
console.log(pikachu.learnAttackSkill(lightning));
console.log(pikachu.learnAttackSkill(lightning));
console.log(pikachu.attack("lightning", shiggy));
console.log(pikachu.attack("lightning", shiggy));
console.log(pikachu.addMagic(30));
console.log(pikachu.attack("lightning", shiggy));
console.log(shiggy.attack("tornado", pikachu));