export default function healthHandler(character) {
  if (!character) throw new Error('character not found');
  else if (!character.health) throw new Error('character is bad');
  const { name, health } = character;
  return (health > 50 && 'healthy')
  || (health <= 50 && health >= 15 && 'wounded')
  || 'critical';
}
