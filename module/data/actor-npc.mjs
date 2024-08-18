import DieRpgActorBase from './base-actor.mjs';

export default class DieRpgNPC extends DieRpgActorBase {
  static LOCALIZATION_PREFIXES = ['DIE_RPG.Actor.NPC'];

  static defineSchema() {
    const fields = foundry.data.fields;
    // const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.abilities = new fields.ArrayField(new fields.ObjectField());

    // TODO: see if we want any of this from items
    schema.attributes = new fields.SchemaField({
      npcType: new fields.StringField({ required: true, blank: true }),
      fallenSubtype: new fields.StringField({ required: true, blank: true }),
      paragonSubtype: new fields.StringField({ required: true, blank: true }),
      paragonPowerLevel: new fields.StringField({ required: true, blank: true }),
    });

    return schema;
  }
}
