import DieRpgActorBase from "./base-actor.mjs";

export default class DieRpgCharacter extends DieRpgActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.attributes = new fields.SchemaField({
      level: new fields.NumberField({ ...requiredInteger, initial: 1, min: 0 }),
      paragonType: new fields.StringField({ required: true, blank: true }),
      look: new fields.StringField({ required: true, blank: true }),
    });

    schema.persona = new fields.SchemaField({
      name: new fields.StringField({ required: true, blank: true }),
      pronouns: new fields.StringField({ required: true, blank: true }),
      // img: new FilePathField({ required: false, categories: ["IMAGE"] }),
      biography: new fields.HTMLField({required: false, initial: undefined}),
    });

    schema.notes = new fields.HTMLField({required: false, initial: undefined});

    return schema;
  }

  prepareDerivedData() {

  }

  getRollData() {
    const data = super.getRollData();

    data.lvl = this.attributes.level;

    return data
  }
}