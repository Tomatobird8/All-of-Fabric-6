////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {


  // Diamond

  event.add('c:gems/diamond', 'minecraft:diamond')

  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

  event.add('c:workbench', 'minecraft:crafting_table')

  // Create / Tech Reborn

  event.add('c:zinc_plates', 'techreborn:zinc_plate')
  event.add('c:brass_plates', 'techreborn:brass_plate')

  event.add('c:raw_lead_blocks', 'indrev:raw_lead_block')
  event.add('c:raw_silver_blocks', 'indrev:raw_silver_block')
  event.add('c:raw_tungsten_blocks', 'indrev:raw_tungsten_block')
  event.add('c:raw_tin_blocks', 'indrev:raw_tin_block')

  // Knives

  event.add('c:knives', 'farmersdelight:flint_knife')
  event.add('c:knives', 'farmersdelight:iron_knife')
  event.add('c:knives', 'farmersdelight:golden_knife')
  event.add('c:knives', 'farmersdelight:diamond_knife')
  event.add('c:knives', 'farmersdelight:netherite_knife')
});

ServerEvents.tags('block', event => {

  // Graves fix
  event.add('minecells:conjunctivius_unbreakable', 'yigd:grave')






});
