import React, { useState } from 'react';
import './App.css'
import Navbar from './Navbar';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const changeSection = (section) => {
    setActiveSection(section);
  }

  return (
    <div>

      {/* Header for the website title */}
      <header>
        <h1>Black Sheep Coffee Bar Recipes</h1>
      </header>

      {/* Navbar */}
      <Navbar changeSection={changeSection} />

      {/* Conditional rendering for sections */}
      {activeSection === 'home' && (
        <section id='home'>
          <div class="recipes-container">
            <div class="coffee-container">
              <div class="item-wrapper">
                <p class="drink-title">espresso</p>
                <p>Small(4oz) = 1 shot </p>
                <p>Double(4oz) = 2 shots</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">espresso con panna</p>
                <p>Small(4oz) = 1 shot </p>
                <p>Double(4oz) = 2 shots</p>
                <p>Add whipped cream</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">americano</p>
                <p>fill cup with hot water</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(20pz) = 4 shots</p>
                <p>add milk if ordered</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">latte</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(20pz) = 4 shots</p>
                <p>add milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">cappucino</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(20pz) = 4 shots</p>
                <p>add milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">flat white</p>
                <p>Small(8oz) = 2 shots</p>
                <p>add milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">cortado</p>
                <p>Small(8oz) = 2 shots</p>
                <p>pour milk until cup is 3/4 full</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">mocha</p>
                <p>Small(8oz) = 1 pump of chocolate syrup</p>
                <p>Regular(12oz) = 2 pumps of chocolate syrup</p>
                <p>Large(16oz) = 3 pumps of chocolate syrup</p>
                <p>Extra-Large(20pz) = 4 pumps of chocolate syrup</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(20pz) = 4 shots</p>
                <p>add milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">spanish latte</p>
                <p>Small(8oz) = 25g of condendsed milk</p>
                <p>Regular(12oz) = 45g of condendsed milk</p>
                <p>Large(16oz) = 65g of condendsed milk</p>
                <p>Extra-Large(20pz) = 85g of condendsed milk</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(20pz) = 4 shots</p>
                <p>add milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">pistachio latte /// using blue volcano</p>
                <p>Small(8oz) = 1 pump of pistachio syrup</p>
                <p>Regular(12oz) = 2 pumps of pistachio syrup</p>
                <p>Large(16oz) = 3 pumps of pistachio syrup</p>
                <p>Extra-Large(20pz) = 4 pumps of pistachio syrup</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(20pz) = 4 shots</p>
                <p>add milk</p>
                <p>add cream and sprinkle chopped pistachios</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">honey cardamom oat latte</p>
                <p>Regular(12oz) = 2 pumps of honey</p>
                <p>Large(16oz) = 3 pumps of honey</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>add 2 shakes of cardamom</p>
                <p>add 2 shakes of cinnamon</p>
                <p>add oat milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">coconut latte</p>
                <p>Small(8oz) = 1 pump of coconut syrup</p>
                <p>Regular(12oz) = 2 pumps of coconut syrup</p>
                <p>Large(16oz) = 3 pumps of coconut syrup</p>
                <p>Extra-Large(20pz) = 4 pumps of coconut syrup</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(20pz) = 4 shots</p>
                <p>add coconut milk</p>
                <p>add cream and a sprinkle of coconut shavings</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">coco / choco latte</p>
                <p>Small(8oz) = 1 pump of coconut syrup</p>
                <p>Regular(12oz) = 1 pump of coconut syrup</p>
                <p>Large(16oz) = 1 pump of coconut syrup</p>
                <p>Extra-Large(20pz) = 2 pumps of coconut syrup</p>
                <p>Small(8oz) = 1 pump of chocolate syrup</p>
                <p>Regular(12oz) = 1 pump of chocolate syrup</p>
                <p>Large(16oz) = 2 pumps of chocolate syrup</p>
                <p>Extra-Large(20pz) = 2 pumps of chocolate syrup</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(20pz) = 4 shots</p>
                <p>add coconut milk</p>
                <p>add cream and chocolate sauce, then coconut shavings</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">mint-mocha latte</p>
                <p>Small(8oz) = 1 pump of peppermint syrup</p>
                <p>Regular(12oz) = 1 pump of peppermint syrup</p>
                <p>Large(16oz) = 1 pump of peppermint syrup</p>
                <p>Extra-Large(20pz) = 2 pumps of peppermint syrup</p>
                <p>Small(8oz) = 1 pump of chocolate syrup</p>
                <p>Regular(12oz) = 1 pump of chocolate syrup</p>
                <p>Large(16oz) = 2 pumps of chocolate syrup</p>
                <p>Extra-Large(20pz) = 2 pumps of chocolate syrup</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(20pz) = 4 shots</p>
                <p>add milk</p>
                <p>add cream and chocolate sauce in a zig-zag pattern</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">caramel-mocha latte</p>
                <p>Small(8oz) = 1 pump of caramel syrup</p>
                <p>Regular(12oz) = 1 pump of caramel syrup</p>
                <p>Large(16oz) = 1 pump of caramel syrup</p>
                <p>Extra-Large(20pz) = 2 pumps of caramel syrup</p>
                <p>Small(8oz) = 1 pump of chocolate syrup</p>
                <p>Regular(12oz) = 1 pump of chocolate syrup</p>
                <p>Large(16oz) = 2 pumps of chocolate syrup</p>
                <p>Extra-Large(20pz) = 2 pumps of chocolate syrup</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(20pz) = 4 shots</p>
                <p>add milk</p>
                <p>add cream and chocolate & caramel sauce in a zig-zag pattern</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">filter brew</p>
                <p>fill cup with filter coffee</p>
                <p>if ordered, add milk</p>
              </div>

            </div>

            <div class="coffeeless-drinks-container">
              <div class="item-wrapper">
                <p class="drink-title">chai latte</p>
                <p>Regular(12oz) = 1 pump of chai</p>
                <p>add 1 sprinkle of cinnamon</p>
                <p>add milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">turmeric latte</p>
                <p>Regular(12oz) = 150g of turmeric powder</p>
                <p>add oat milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">hot chocolate</p>
                <p>Small(8oz) = 40g of chocolate powder</p>
                <p>Regular(12oz) = 60g of chocolate powder</p>
                <p>Large(16oz) = 80g of chocolate powder</p>
                <p>Extra-Large(20pz) = 100g of chocolate powder</p>
                <p>add milk then whisk it</p>
                <p>steam the milk and chocolate powder</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">babyccino</p>
                <p>steam milk</p>
                <p>pour into 4oz cup</p>
                <p>if required, 1 sprinkle of chocolate powder</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">puppaccino</p>
                <p>add whipped cream into a Small cup (4oz), then add 1 dog treat</p>
                <p>add whipped cream into a Large cup (8oz), then add 2 dog treats</p>
              </div>
            </div>

            <div class="iced-drinks-container">
              <div class="item-wrapper">
                <p class="drink-title">iced americano</p>
                <p>fill a cup full of ice</p>
                <p>add filtered water</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>if requested, add milk</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced latte</p>
                <p>fill a cup full of ice</p>
                <p>add cold milk</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced latte with cold foam</p>
                <p>fill a cup full of ice</p>
                <p>add cold milk to 3/4 of the way</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>add cold foam to the top</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced mocha</p>
                <p>fill a cup full of ice</p>
                <p>add cold milk</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>Regular(12oz) = 2 pumps of chocolate syrup</p>
                <p>Large(16oz) = 3 pumps of chocolate syrup</p>
                <p>Extra-Large(24oz) = 4 pumps of chocolate syrup</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced spanish latte</p>
                <p>fill a cup full of ice</p>
                <p>Regular(12oz) = 45g of condensed milk</p>
                <p>Large(16oz) = 65g of condensed milk</p>
                <p>Extra-Large(24oz) = 85g of condensed milk</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>whisk espresso and condensed milk together</p>
                <p>use a dome lid</p>
                <p>add cold milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced honey oat cardamom latte</p>
                <p>fill a cup full of ice</p>
                <p>add 2 shakes of cardamom</p>
                <p>add 2 shakes of cinnamon</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>Regular(12oz) = 2 pumps of honey</p>
                <p>Large(16oz) = 3 pumps of honey</p>
                <p>Extra-Large(24oz) = 4 pumps of honey</p>
                <p>whisk honey and espresso together</p>
                <p>add oat milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced vanilla-oat latte</p>
                <p>fill a cup full of ice</p>
                <p>Regular(12oz) = 2 pumps of vanilla syrup</p>
                <p>Large(16oz) = 3 pumps of vanilla syrup</p>
                <p>Extra-Large(24oz) = 4 pumps of vanilla syrup</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>add oat milk</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced chai</p>
                <p>fill a cup full of ice</p>
                <p>add 1 sprinkle of cinnamon</p>
                <p>Regular(12oz) = 1 pump of chai syrup</p>
                <p>Large(16oz) = 1.5 pumps of chai syrup</p>
                <p>Extra-Large(24oz) = 2 pumps of chai syrup</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced tea</p>
                <p>fill a cup full of ice</p>
                <p>add ice tea /// 3/4 full if cold foam is added</p>
                <p>if required, add syrups</p>
                <p>if required, add cold foam</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">coffee frappe</p>
                <p>in a blender, add milk</p>
                <p>Regular(12oz) = 100ml of milk</p>
                <p>Large(16oz) = 125ml of milk</p>
                <p>Extra-Large(24oz) = 150ml of milk</p>
                <p>add in 1 full cup of ice</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>add frappe powder</p>
                <p>Regular(12oz) = 1 scoop of frappe powder</p>
                <p>Large(16oz) = 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz) = 2 scoops of frappe powder</p>
                <p>blend on setting 1</p>
                <p>add cream</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">coconut frappe</p>
                <p>in a blender, add milk</p>
                <p>Regular(12oz) = 100ml of milk</p>
                <p>Large(16oz) = 125ml of milk</p>
                <p>Extra-Large(24oz) = 150ml of milk</p>
                <p>add in 1 full cup of ice</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>add frappe powder</p>
                <p>Regular(12oz) = 1 scoop of frappe powder</p>
                <p>Large(16oz) = 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz) = 2 scoops of frappe powder</p>
                <p>Regular(12oz) = 2 pumps of coconut syrup</p>
                <p>Large(16oz) = 3 pumps of coconut syrup</p>
                <p>Extra-Large(24oz) = 4 pumps of coconut syrup</p>
                <p>blend on setting 1</p>
                <p>add cream and 1 sprinkle of coconut shavings</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">coco-choco frappe</p>
                <p>in a blender, add milk</p>
                <p>Regular(12oz) = 100ml of milk</p>
                <p>Large(16oz) = 125ml of milk</p>
                <p>Extra-Large(24oz) = 150ml of milk</p>
                <p>add in 1 full cup of ice</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>add chocolate frappe powder</p>
                <p>Regular(12oz) = 1 scoop of frappe powder</p>
                <p>Large(16oz) = 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz) = 2 scoops of frappe powder</p>
                <p>Regular(12oz) = 1 pump of coconut syrup</p>
                <p>Large(16oz) = 1 pump of coconut syrup</p>
                <p>Extra-Large(24oz) = 2 pumps of coconut syrup</p>
                <p>blend on setting 1</p>
                <p>add cream and chocolate sauce, then coconut shavings</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">mint-mocha frappe</p>
                <p>in a blender, add milk</p>
                <p>Regular(12oz) = 100ml of milk</p>
                <p>Large(16oz) = 125ml of milk</p>
                <p>Extra-Large(24oz) = 150ml of milk</p>
                <p>add in 1 full cup of ice</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>add chocolate frappe powder</p>
                <p>Regular(12oz) = 1 scoop of frappe powder</p>
                <p>Large(16oz) = 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz) = 2 scoops of frappe powder</p>
                <p>Regular(12oz) = 1 pump of chocolate syrup</p>
                <p>Large(16oz) = 2 pumps of chocolate syrup</p>
                <p>Extra-Large(24oz) = 2 pumps of chocolate syrup</p>
                <p>blend on setting 1</p>
                <p>add cream and chocolate sauce in a zig-zag pattern</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">caramel-mocha frappe</p>
                <p>in a blender, add milk</p>
                <p>Regular(12oz) = 100ml of milk</p>
                <p>Large(16oz) = 125ml of milk</p>
                <p>Extra-Large(24oz) = 150ml of milk</p>
                <p>add in 1 full cup of ice</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>add chocolate frappe powder</p>
                <p>Regular(12oz) = 1 scoop of frappe powder</p>
                <p>Large(16oz) = 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz) = 2 scoops of frappe powder</p>
                <p>Regular(12oz) = 1 pump of caramel syrup</p>
                <p>Large(16oz) = 1 pump of caramel syrup</p>
                <p>Extra-Large(24oz) = 2 pumps of caramel syrup</p>
                <p>blend on setting 1</p>
                <p>add cream and chocolate & caramel sauce in a zig-zag pattern</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">chocolate dream frappe</p>
                <p>in a blender, add milk</p>
                <p>Regular(12oz) = 125ml of milk</p>
                <p>Large(16oz) = 150ml of milk</p>
                <p>Extra-Large(24oz) = 175ml of milk</p>
                <p>add in 1 full cup of ice</p>
                <p>add chocolate frappe powder</p>
                <p>Regular(12oz) = 1 scoop of frappe powder</p>
                <p>Large(16oz) = 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz) = 2 scoops of frappe powder</p>
                <p>Regular(12oz) = 2 pumps of chocolate syrup</p>
                <p>Large(16oz) = 3 pumps of chocolate syrup</p>
                <p>Extra-Large(24oz) = 4 pumps of chocolate syrup</p>
                <p>blend on setting 1</p>
                <p>add cream and a drizzle of chocolate sauce</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">pistachio frappe</p>
                <p>in a blender, add milk</p>
                <p>Regular(12oz) = 100ml of milk</p>
                <p>Large(16oz) = 125ml of milk</p>
                <p>Extra-Large(24oz) = 150ml of milk</p>
                <p>add in 1 full cup of ice</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>add frappe powder</p>
                <p>Regular(12oz) = 1 scoop of frappe powder</p>
                <p>Large(16oz) = 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz) = 2 scoops of frappe powder</p>
                <p>Regular(12oz) = 2 pumps of pistachio syrup</p>
                <p>Large(16oz) = 3 pumps of pistachio syrup</p>
                <p>Extra-Large(24oz) = 4 pumps of pistachio syrup</p>
                <p>add chopped pistachios</p>
                <p>Regular(12oz) = 1 scoop of pistachios</p>
                <p>Large(16oz) = 1.5 scoops of pistachios</p>
                <p>Extra-Large(24oz) = 2 scoops of pistachios</p>
                <p>blend on setting 1</p>
                <p>add cream and 1 sprinkle of pistachios</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">biscoff frappe</p>
                <p>in a blender, add milk</p>
                <p>Regular(12oz) = 100ml of milk</p>
                <p>Large(16oz) = 125ml of milk</p>
                <p>Extra-Large(24oz) = 150ml of milk</p>
                <p>add in 1 full cup of ice</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>add frappe powder</p>
                <p>Regular(12oz) = 1 scoop of frappe powder</p>
                <p>Large(16oz) = 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz) = 2 scoops of frappe powder</p>
                <p>Regular(12oz) = 2 pumps of caramel syrup</p>
                <p>Large(16oz) = 3 pumps of caramel syrup</p>
                <p>Extra-Large(24oz) = 4 pumps of caramel syrup</p>
                <p>blend on setting 1</p>
                <p>add cream and 1 scoop of biscoff crumbs</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">mint frappe</p>
                <p>in a blender, add milk</p>
                <p>Regular(12oz) = 125ml of milk</p>
                <p>Large(16oz) = 150ml of milk</p>
                <p>Extra-Large(24oz) = 175ml of milk</p>
                <p>add in 1 full cup of ice</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>add frappe powder</p>
                <p>Regular(12oz) = 1 scoop of frappe powder</p>
                <p>Large(16oz) = 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz) = 2 scoops of frappe powder</p>
                <p>Regular(12oz) = 2 pumps of peppermint syrup</p>
                <p>Large(16oz) = 3 pumps of peppermint syrup</p>
                <p>Extra-Large(24oz) = 4 pumps of peppermint syrup</p>
                <p>blend on setting 1</p>
                <p>if required, add whipped cream</p>
                <p>use a dome lid</p>
              </div>
            </div>

            <div class="matcha-drinks-container">
              <div class="item-wrapper">
                <p class="drink-title">strawberries & cream matcha latte</p>
                <p>Regular(12oz) = 1 pump of vanilla syrup</p>
                <p>Large(16oz) = 2 pumps of vanilla syrup</p>
                <p>Regular(12oz) = 3 pumps of strawberry syrup</p>
                <p>Large(16oz) = 3 pumps of strawberry syrup</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add oat milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">blueberry matcha latte</p>
                <p>Regular(12oz) = 1 pump of vanilla syrup</p>
                <p>Large(16oz) = 2 pumps of vanilla syrup</p>
                <p>Regular(12oz) = 3 pumps of blueberry syrup</p>
                <p>Large(16oz) = 3 pumps of blueberry syrup</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add oat milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">vanilla matcha latte</p>
                <p>Small(8oz) = 2 pumps of vanilla syrup</p>
                <p>Regular(12oz) = 3 pumps of vanilla syrup</p>
                <p>Large(16oz) = 4 pumps of vanilla syrup</p>
                <p>add matcha</p>
                <p>Small(8oz) = 30ml of matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">matcha latte</p>
                <p>add matcha</p>
                <p>Small(8oz) = 30ml of matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">matcha green tea</p>
                <p>add matcha</p>
                <p>Small(8oz) = 30ml of matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>fill cup with hot water</p>
                <p>if required, add milk</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced strawberries & cream matcha latte</p>
                <p>fill a cup full of ice</p>
                <p>Regular(12oz) = 1 pump of vanilla syrup</p>
                <p>Large(16oz) = 2 pumps of vanilla syrup</p>
                <p>Regular(12oz) = 3 pumps of strawberry syrup</p>
                <p>Large(16oz) = 3 pumps of strawberry syrup</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add oat milk</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced blueberry matcha latte</p>
                <p>add spirulina</p>
                <p>Regular(12oz) = 10ml of spirulina</p>
                <p>Large(16oz) = 10ml of spirulina</p>
                <p>Regular(12oz) = 1 pump of vanilla syrup</p>
                <p>Large(16oz) = 2 pumps of vanilla syrup</p>
                <p>Regular(12oz) = 3 pumps of blueberry syrup</p>
                <p>Large(16oz) = 3 pumps of blueberry syrup</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add oat milk</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced vanilla matcha latte</p>
                <p>fill a cup full of ice</p>
                <p>Regular(12oz) = 3 pumps of vanilla syrup</p>
                <p>Large(16oz) = 4 pumps of vanilla syrup</p>
                <p>add matcha</p>
                <p>Small(8oz) = 30ml of matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add milk</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced passionfruit matcha lemonade</p>
                <p>fill a cup full of ice</p>
                <p>Regular(12oz) = 3 pumps of passion fruit syrup</p>
                <p>Large(16oz) = 4 pumps of passion fruit syrup</p>
                <p>Regular(12oz) = 2 pumps of lemonade syrup</p>
                <p>Large(16oz) = 2 pumps of lemonade syrup</p>
                <p>add filtered water</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced matcha latte</p>
                <p>fill a cup full of ice</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add milk</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced matcha matcha</p>
                <p>fill a cup full of ice</p>
                <p>Regular(12oz) = 2 pumps of chosen syrup</p>
                <p>Large(16oz) = 3 pumps of chosen syrup</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add matcha cold foam</p>
                <p>add 1 sprinkle of matcha powder</p>
                <p>add milk</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced matcha green tea</p>
                <p>fill a cup full of ice</p>
                <p>add filtered water</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add milk</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">matcha mint frappe</p>
                <p>in a blender, add milk</p>
                <p>Regular(12oz) = 125ml of milk</p>
                <p>Large(16oz) = 150ml of milk</p>
                <p>Extra-Large(24oz) = 175ml of milk</p>
                <p>add in 1 full cup of ice</p>
                <p>add frappe powder</p>
                <p>Regular(12oz) = 1 scoop of frappe powder</p>
                <p>Large(16oz) = 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz) = 2 scoops of frappe powder</p>
                <p>Regular(12oz) = 2 pumps of peppermint syrup</p>
                <p>Large(16oz) = 3 pumps of peppermint syrup</p>
                <p>Extra-Large(24oz) = 4 pumps of peppermint syrup</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>Extra-Large(24oz) = 60ml of matcha</p>
                <p>blend on setting 1</p>
                <p>add cream and 1 sprinkle of matcha powder</p>
                <p>use a dome lid</p>
              </div>
            </div>

            <div class="smoothie-container">
              <div class="item-wrapper">
                <p class="drink-title">passion fusion smoothie</p>
                <p>in a purple jug, add 250ml of apple juice</p>
                <p>if required, add protein powder</p>
                <p>add 1 pash n shoot pouch</p>
                <p>blend on setting 1</p>
                <p>pour into a Regular(12oz) cup</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">berry bliss smoothie</p>
                <p>in a purple jug, add 250ml of apple juice</p>
                <p>if required, add protein powder</p>
                <p>add 1 berry go round pouch</p>
                <p>blend on setting 1</p>
                <p>pour into a Regular(12oz) cup</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">coco mango smoothie</p>
                <p>in a purple jug, add 250ml of apple juice</p>
                <p>if required, add protein powder</p>
                <p>add 1 coco loco pouch</p>
                <p>blend on setting 1</p>
                <p>pour into a Regular(12oz) cup</p>
                <p>use a dome lid</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">green revitalizer smoothie</p>
                <p>in a purple jug, add 250ml of apple juice</p>
                <p>if required, add protein powder</p>
                <p>add 1 kale kick pouch</p>
                <p>blend on setting 1</p>
                <p>pour into a Regular(12oz) cup</p>
                <p>use a dome lid</p>
              </div>
            </div>

            <div class="seasonal-drinks-container">
              <div class="item-wrapper">
                <p class="drink-title">pumpkin spice latte /// using blue volcano</p>
                <p>Small(8oz) = 1 shot</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Small(8oz) = 1 pump of cinnamon syrup</p>
                <p>Regular(12oz) = 1 pump of cinnamon syrup</p>
                <p>Large(16oz) = 1 pump of cinnamon syrup</p>
                <p>add milk</p>
                <p>add whipped cream</p>
                <p>drizzle pumpkin sauce on top</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced pumpkin spice latte /// using blue volcano</p>
                <p>Regular(12oz) = 2 shots</p>
                <p>Large(16oz) = 3 shots</p>
                <p>Extra-Large(24oz) = 4 shots</p>
                <p>Regular(12oz) = 3 pumps of cinnamon syrup</p>
                <p>Large(16oz) = 4 pumps of cinnamon syrup</p>
                <p>Extra-Large(24oz) = 5 pumps of cinnamon syrup</p>
                <p>add milk</p>
                <p>add whipped cream</p>
                <p>drizzle pumpkin sauce on top</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">pumpkin spice matcha latte</p>
                <p>Regular(12oz) = 2 pumps of pumpkin syrup</p>
                <p>Large(16oz) = 3 pumps of pumpkin syrup</p>
                <p>Regular(12oz) = 1 pump of cinnamon syrup</p>
                <p>Large(16oz) = 1 pump of cinnamon syrup</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add milk</p>
                <p>if required, add cream and 1 scoop of biscoff crumbs</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced pumpkin spice matcha latte</p>
                <p>Regular(12oz) = 1 pump of cinnamon syrup</p>
                <p>Large(16oz) = 1 pump of cinnamon syrup</p>
                <p>Regular(12oz) = 2 pumps of pumpkin syrup</p>
                <p>Large(16oz) = 3 pumps of pumpkin syrup</p>
                <p>fill a cup full of ice</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add milk</p>
                <p>if required, add cream and 1 scoop of biscoff crumbs</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">apple crumble matcha latte</p>
                <p>Regular(12oz) = 3 pumps of apple syrup</p>
                <p>Large(16oz) = 4 pumps of apple syrup</p>
                <p>Regular(12oz) = 1 pump of ginger-bread syrup</p>
                <p>Large(16oz) = 1 pump of ginger-bread syrup</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add oat milk</p>
                <p>if required, add cream and 1 scoop of biscoff crumbs</p>
              </div>

              <div class="item-wrapper">
                <p class="drink-title">iced apple crumble matcha latte</p>
                <p>Regular(12oz) = 1 pump of ginger-bread syrup</p>
                <p>Large(16oz) = 1 pump of ginger-bread syrup</p>
                <p>Regular(12oz) = 3 pumps of apple syrup</p>
                <p>Large(16oz) = 4 pumps of apple syrup</p>
                <p>fill a cup full of ice</p>
                <p>add matcha</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add milk</p>
                <p>if required, add cream and 1 scoop of biscoff crumbs</p>
              </div>
            </div>

          </div>
        </section>
      )}
    </div>
  )
}

export default App
