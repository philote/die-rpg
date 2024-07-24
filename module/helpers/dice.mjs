export async function rollStat(dataset, actor) {
  let label = dataset.label;
  let statName = dataset.statName;
  let statValue = actor.system.stats[statName].value;

  let roll = _rollDicePool(statValue);
  _buildChatRollMessage(roll, label, actor);

  return roll;
}

function rollDialog() {
  //
}

function _rollDicePool(statValue){
  const rollFormula = `${statValue}d6`
  let r = new Roll(rollFormula);
  return r;
}

function _buildChatRollMessage(roll, label, actor) {
  roll.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: actor }),
    flavor: label ? `[stat] ${label}` : '',
    rollMode: game.settings.get('core', 'rollMode'),
  });
}