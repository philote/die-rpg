export default class DieRpgActorBase extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.resources = new fields.SchemaField({
      health: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        max: new fields.NumberField({ ...requiredInteger, initial: 10 })
      }),
      guard: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        max: new fields.NumberField({ ...requiredInteger, initial: 10 })
      }),
      willpower: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      }),
      defense: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      }),
    });
    
    schema.biography = new fields.HTMLField({ required: true, blank: true }); // equivalent to passing ({initial: ""}) for StringFields

    // Iterate over stat names and create a new SchemaField for each.
    schema.stats = new fields.SchemaField(Object.keys(CONFIG.DIE_RPG.stats).reduce((obj, stat) => {
      obj[stat] = new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 2, min: 0 }),
      });
      return obj;
    }, {}));

    return schema;
  }

  prepareDerivedData() {
    // Loop through stats scores, and add their modifiers to our sheet output.
    for (const key in this.stats) {
      // Handle stats label localization.
      this.stats[key].label = game.i18n.localize(CONFIG.DIE_RPG.stats[key]) ?? key;
    }
  }

  getRollData() {
    const data = {};

    // Copy the stat scores to the top level, so that rolls can use
    // formulas like `@str.value + 4`.
    if (this.stats) {
      for (let [k,v] of Object.entries(this.stats)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }

    return data
  }
}
