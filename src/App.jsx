import React, { useState } from 'react';
import './App.css'
import Navbar from './Navbar';
import SearchFunctionality from './SearchFunctionality';
import bscLogo from "./assets/bsc_logo.png";
import bscCover from "./assets/black_sheep_cover.jpg";

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const changeSection = (section) => {
    setActiveSection(section);
  }

  return (
    <div>

      {/* Header for the website title */}
      <header>
        <img className='bsc-logo' src={bscLogo} alt="" />
        <h1>Black Sheep Coffee Bar Recipes</h1>
      </header>

      <section>
        <img className='black-sheep-cover-photo' src={bscCover} alt="" />
      </section>

      {/* Navbar */}
      <Navbar changeSection={changeSection} />

      {/* Search functionality for finding specific recipes or prepping guides */}
      <div class="search-bar">
        <SearchFunctionality />
        <p>Need to search for something specific?</p>
        <input className="search-box" type="text" id="myInput" placeholder="Looking for a recipe or prep guide? Start typing..." />
      </div>

      {/* Conditional rendering for sections */}
      {activeSection === 'home' && (
        <section id='home'>
          <div className="recipes-container">
            <div className="coffee-container">
              <div className="item-wrapper wrapper-1">
                <div className="item-text-content">
                  <p className="drink-title">espresso</p>
                  <p className='ingredients-title'>Ingredients:</p>
                  <p>Single: 1 shot of espresso</p>
                  <p>Double: 2 shots of espresso</p>
                  <p className="steps-title">Steps:</p>
                  <p className='recipe-method'>Pour the shots into an espresso cup.</p>
                </div>
                {/* <img className='espresso-png' src="espresso.png" alt="" /> */}
              </div>

              <div className="item-wrapper wrapper-2">
                <div className="item-text-content">
                  <p className="drink-title">espresso con panna</p>
                  <p className='ingredients-title'>Ingredients:</p>
                  <p>Single: 1 shot of espresso</p>
                  <p>Double: 2 shots of espresso</p>
                  <p className="steps-title">Steps:</p>
                  <p className='recipe-method'>Pour the shots into an espresso cup.</p>
                  <p className='recipe-method'>Top off with whipped cream.</p>
                </div>
                {/* <img className='espresso-con-panna' src="espresso-con-panna.png" alt="" /> */}
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Americano</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p className="recipe-method">Fill a cup with hot water.</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (20oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the shots into a cup on top of the water.</p>
                <p className="recipe-method">Add a splash of milk if requested.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (20oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the shots into a cup.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Cappuccino</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (20oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the shots into a cup.</p>
                <p className="recipe-method">Steam milk until frothy.</p>
                <p className="recipe-method">Pour the frothed milk over the shots, ensuring a thick foam layer on top.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Flat White</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 2 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the shots into an 8oz cup.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Cortado</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 2 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the shots into an 8oz cup.</p>
                <p className="recipe-method">Steam milk and pour it into the cup until it is 3/4 full, maintaining an equal balance of espresso and milk.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Mocha</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 1 pump of chocolate syrup</p>
                <p>Regular (12oz): 2 pumps of chocolate syrup</p>
                <p>Large (16oz): 3 pumps of chocolate syrup</p>
                <p>Extra-Large (20oz): 4 pumps of chocolate syrup</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (20oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pump the chocolate syrup into a cup.</p>
                <p className="recipe-method">Pour the shots into a cup.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Spanish Latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 25g of condensed milk</p>
                <p>Regular (12oz): 45g of condensed milk</p>
                <p>Large (16oz): 65g of condensed milk</p>
                <p>Extra-Large (20oz): 85g of condensed milk</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (20oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add correct weight of condensed milk into a steamer tin.</p>
                <p className="recipe-method">Pour the shots into the steamer tin and whisk until it's mixed.</p>
                <p className="recipe-method">Pour the mixture of condensed milk and espresso into a cup</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Pistachio Latte /// Using Blue Volcano</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 1 pump of pistachio syrup</p>
                <p>Regular (12oz): 2 pumps of pistachio syrup</p>
                <p>Large (16oz): 3 pumps of pistachio syrup</p>
                <p>Extra-Large (20oz): 4 pumps of pistachio syrup</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (20oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add pistachio syrup to a cup.</p>
                <p className="recipe-method">Pour the shots into the cup.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
                <p className="recipe-method">Add cream and sprinkle chopped pistachios on top.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">honey cardamom oat latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Regular (12oz): 2 pumps of honey</p>
                <p>Large (16oz): 3 pumps of honey</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">add 2 shakes of cardamom into a cup</p>
                <p className="recipe-method">add 2 shakes of cinnamon into a cup</p>
                <p className="recipe-method">Pump the honey syrup into a cup.</p>
                <p className="recipe-method">Pour the shots into a cup and shake the cup a bit.</p>
                <p className="recipe-method">Steam oat milk and pour it into the cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">coconut latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 1 pump of coconut syrup</p>
                <p>Regular (12oz): 2 pumps of coconut syrup</p>
                <p>Large (16oz): 3 pumps of coconut syrup</p>
                <p>Extra-Large (20oz): 4 pumps of coconut syrup</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (20oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pump the coconut syrup into a cup.</p>
                <p className="recipe-method">Pour the shots into a cup and shake the cup a bit.</p>
                <p className="recipe-method">Steam coconut milk and pour it into the cup.</p>
                <p className="recipe-method">top off with whipped cream and with a sprinkle of coconut shavings</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">coco / choco latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 1 pump of coconut syrup</p>
                <p>Regular (12oz): 1 pump of coconut syrup</p>
                <p>Large (16oz): 1 pump of coconut syrup</p>
                <p>Extra-Large (20oz): 2 pumps of coconut syrup</p>
                <p>Small (8oz): 1 pump of chocolate syrup</p>
                <p>Regular (12oz): 1 pump of chocolate syrup</p>
                <p>Large (16oz): 2 pumps of chocolate syrup</p>
                <p>Extra-Large (20oz): 2 pumps of chocolate syrup</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (20oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add coconut syrup and chocolate syrup to a cup.</p>
                <p className="recipe-method">Pour the shots into the cup and gently mix.</p>
                <p className="recipe-method">Steam coconut milk and pour it into the cup.</p>
                <p className="recipe-method">Top with cream, drizzle with chocolate sauce, and sprinkle coconut shavings on top.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">mint-mocha latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 1 pump of peppermint syrup</p>
                <p>Regular (12oz): 1 pump of peppermint syrup</p>
                <p>Large (16oz): 1 pump of peppermint syrup</p>
                <p>Extra-Large (20oz): 2 pumps of peppermint syrup</p>
                <p>Small (8oz): 1 pump of chocolate syrup</p>
                <p>Regular (12oz): 1 pump of chocolate syrup</p>
                <p>Large (16oz): 2 pumps of chocolate syrup</p>
                <p>Extra-Large (20oz): 2 pumps of chocolate syrup</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (20oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add peppermint syrup and chocolate syrup to a cup.</p>
                <p className="recipe-method">Pour the shots into the cup and gently mix.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
                <p className="recipe-method">Top with cream and drizzle chocolate sauce in a zig-zag pattern.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">caramel-mocha latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 1 pump of caramel syrup</p>
                <p>Regular (12oz): 1 pump of caramel syrup</p>
                <p>Large (16oz): 1 pump of caramel syrup</p>
                <p>Extra-Large (20oz): 2 pumps of caramel syrup</p>
                <p>Small (8oz): 1 pump of chocolate syrup</p>
                <p>Regular (12oz): 1 pump of chocolate syrup</p>
                <p>Large (16oz): 2 pumps of chocolate syrup</p>
                <p>Extra-Large (20oz): 2 pumps of chocolate syrup</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (20oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add caramel syrup and chocolate syrup to a cup.</p>
                <p className="recipe-method">Pour the shots into the cup and gently mix.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
                <p className="recipe-method">Top with cream and drizzle chocolate and caramel sauce in a zig-zag pattern.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">filter brew</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">fill cup with filter coffee</p>
                <p className="recipe-method">if ordered, add a splash of milk into the cup.</p>
              </div>
            </div>

            <div className="coffeeless-drinks-container">
              <div className="item-wrapper">
                <p className="drink-title">chai latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p className="recipe-method">Regular (12oz): 1 pump of chai</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add chai syrup to a cup.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
                <p className="recipe-method">Top off with 1 sprinkle of cinnamon</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">turmeric latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Regular (12oz): 150g of turmeric mixture</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour proper amount of turmeric mixture into a tin.</p>
                <p className="recipe-method">Pour oat milk into the same tin.</p>
                <p className="recipe-method">Steam the oat milk and turmeric mixture and pour into a cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">hot chocolate</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (8oz): 40g of chocolate powder</p>
                <p>Regular (12oz): 60g of chocolate powder</p>
                <p>Large (16oz): 80g of chocolate powder</p>
                <p>Extra-Large (20oz): 100g of chocolate powder</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add proper amount of chocolate powder mixture into a tin.</p>
                <p className="recipe-method">Pour milk into the same tin.</p>
                <p className="recipe-method">Steam the milk and chocolate powder and pour into a cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Babyccino</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Steam milk</p>
                <p>Regular (4oz): Pour into 4oz cup</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Steam the milk.</p>
                <p className="recipe-method">Pour the milk into a 4oz cup.</p>
                <p className="recipe-method">If required, add 1 sprinkle of chocolate powder on top.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Puppaccino</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Small (4oz): 1 dog treat</p>
                <p>Large (8oz): 2 dog treats</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add whipped cream into a Small cup (4oz), then add 1 dog treat.</p>
                <p className="recipe-method">Add whipped cream into a Large cup (8oz), then add 2 dog treats.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Iced Americano</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Fill a cup full of ice</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup full of ice.</p>
                <p className="recipe-method">Add filtered water.</p>
                <p className="recipe-method">If requested, add milk.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Iced Latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Fill a cup full of ice</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup full of ice.</p>
                <p className="recipe-method">Pour cold milk into the cup.</p>
                <p className="recipe-method">Pour the shots into the cup.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">Iced Latte with Cold Foam</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Fill a cup full of ice</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup full of ice.</p>
                <p className="recipe-method">Pour cold milk to 3/4 of the way into the cup.</p>
                <p className="recipe-method">Pour the shots into the cup.</p>
                <p className="recipe-method">Add cold foam to the top.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced mocha</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Fill a cup full of ice</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p>Regular (12oz): 2 pumps of chocolate syrup</p>
                <p>Large (16oz): 3 pumps of chocolate syrup</p>
                <p>Extra-Large (24oz): 4 pumps of chocolate syrup</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup full of ice.</p>
                <p className="recipe-method">Pour cold milk into the cup.</p>
                <p className="recipe-method">Add the appropriate number of shots.</p>
                <p className="recipe-method">Add the chocolate syrup and stir well.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced spanish latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Fill a cup full of ice</p>
                <p>Regular (12oz): 45g of condensed milk</p>
                <p>Large (16oz): 65g of condensed milk</p>
                <p>Extra-Large (24oz): 85g of condensed milk</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup full of ice.</p>
                <p className="recipe-method">Whisk espresso and condensed milk together.</p>
                <p className="recipe-method">Pour the mixture into the cup over the ice.</p>
                <p className="recipe-method">Add cold milk to fill the rest of the cup.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced honey oat cardamom latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Fill a cup full of ice</p>
                <p>Regular (12oz): 2 shakes of cardamom</p>
                <p>Large (16oz): 3 shakes of cardamom</p>
                <p>Extra-Large (24oz): 4 shakes of cardamom</p>
                <p>Regular (12oz): 2 pumps of honey</p>
                <p>Large (16oz): 3 pumps of honey</p>
                <p>Extra-Large (24oz): 4 pumps of honey</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup full of ice.</p>
                <p className="recipe-method">Add cardamom and honey to the cup.</p>
                <p className="recipe-method">Pour the shots into the cup.</p>
                <p className="recipe-method">Add oat milk and stir well.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced vanilla-oat latte</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Fill a cup full of ice</p>
                <p>Regular (12oz): 2 pumps of vanilla syrup</p>
                <p>Large (16oz): 3 pumps of vanilla syrup</p>
                <p>Extra-Large (24oz): 4 pumps of vanilla syrup</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup full of ice.</p>
                <p className="recipe-method">Add the vanilla syrup to the cup.</p>
                <p className="recipe-method">Pour the shots into the cup.</p>
                <p className="recipe-method">Add oat milk and stir well.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced chai</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Fill a cup full of ice</p>
                <p>Regular (12oz): 1 pump of chai syrup</p>
                <p>Large (16oz): 1.5 pumps of chai syrup</p>
                <p>Extra-Large (24oz): 2 pumps of chai syrup</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup full of ice.</p>
                <p className="recipe-method">Add chai syrup and stir well.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced tea</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Fill a cup full of ice</p>
                <p>Fill 3/4 full with iced tea if cold foam is added</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup full of ice.</p>
                <p className="recipe-method">Add iced tea (3/4 full if cold foam is added).</p>
                <p className="recipe-method">If required, add syrups and stir.</p>
                <p className="recipe-method">If required, add cold foam and stir.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">coffee frappe</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Regular(12oz): 100ml of milk</p>
                <p>Large(16oz): 125ml of milk</p>
                <p>Extra-Large(24oz): 150ml of milk</p>
                <p>Add in 1 full cup of ice</p>
                <p>Regular(12oz): 2 shots</p>
                <p>Large(16oz): 3 shots</p>
                <p>Extra-Large(24oz): 4 shots</p>
                <p>Regular(12oz): 1 scoop of frappe powder</p>
                <p>Large(16oz): 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz): 2 scoops of frappe powder</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
                <p className="recipe-method">Add frappe powder into the blender.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">Add cream.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">coconut frappe</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Regular(12oz): 100ml of milk</p>
                <p>Large(16oz): 125ml of milk</p>
                <p>Extra-Large(24oz): 150ml of milk</p>
                <p>Add in 1 full cup of ice</p>
                <p>Regular(12oz): 2 shots</p>
                <p>Large(16oz): 3 shots</p>
                <p>Extra-Large(24oz): 4 shots</p>
                <p>Regular(12oz): 1 scoop of frappe powder</p>
                <p>Large(16oz): 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz): 2 scoops of frappe powder</p>
                <p>Regular(12oz): 2 pumps of coconut syrup</p>
                <p>Large(16oz): 3 pumps of coconut syrup</p>
                <p>Extra-Large(24oz): 4 pumps of coconut syrup</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
                <p className="recipe-method">Add correct syrup amounts into the blender.</p>
                <p className="recipe-method">Add frappe powder into the blender.</p>
                <p className="recipe-method">Blend on setting 1</p>
                <p className="recipe-method">Add cream and 1 sprinkle of coconut shavings</p>
                <p className="recipe-method">Use a dome lid</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">coco-choco frappe</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Regular(12oz): 100ml of milk</p>
                <p>Large(16oz): 125ml of milk</p>
                <p>Extra-Large(24oz): 150ml of milk</p>
                <p>Add in 1 full cup of ice</p>
                <p>Regular(12oz): 2 shots</p>
                <p>Large(16oz): 3 shots</p>
                <p>Extra-Large(24oz): 4 shots</p>
                <p>Regular(12oz): 1 scoop of frappe powder</p>
                <p>Large(16oz): 1.5 scoops of frappe powder</p>
                <p>Extra-Large(24oz): 2 scoops of frappe powder</p>
                <p>Regular(12oz): 1 pump of coconut syrup</p>
                <p>Large(16oz): 1.5 pumps of coconut syrup</p>
                <p>Extra-Large(24oz): 2 pumps of coconut syrup</p>
                <p>Regular(12oz): 1 pump of chocolate syrup</p>
                <p>Large(16oz): 1.5 pumps of chocolate syrup</p>
                <p>Extra-Large(24oz): 2 pumps of chocolate syrup</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
                <p className="recipe-method">Add correct syrup amounts into the blender.</p>
                <p className="recipe-method">Add frappe powder into the blender.</p>
                <p className="recipe-method">Blend on setting 1</p>
                <p className="recipe-method">Add cream and 1 sprinkle of coconut shavings</p>
                <p className="recipe-method">Use a dome lid</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">mint-mocha frappe</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>In a blender, add milk</p>
                <p>Regular (12oz): 100ml of milk</p>
                <p>Large (16oz): 125ml of milk</p>
                <p>Extra-Large (24oz): 150ml of milk</p>
                <p>Add in 1 full cup of ice</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p>Regular (12oz): 1 scoop of frappe powder</p>
                <p>Large (16oz): 1.5 scoops of frappe powder</p>
                <p>Extra-Large (24oz): 2 scoops of frappe powder</p>
                <p>Regular (12oz): 1 pump of chocolate syrup</p>
                <p>Large (16oz): 2 pumps of chocolate syrup</p>
                <p>Extra-Large (24oz): 2 pumps of chocolate syrup</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
                <p className="recipe-method">Add correct syrup amounts into the blender.</p>
                <p className="recipe-method">Add frappe powder into the blender.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">Add cream and chocolate sauce in a zig-zag pattern.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">caramel-mocha frappe</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>In a blender, add milk</p>
                <p>Regular (12oz): 100ml of milk</p>
                <p>Large (16oz): 125ml of milk</p>
                <p>Extra-Large (24oz): 150ml of milk</p>
                <p>Add in 1 full cup of ice</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p>Regular (12oz): 1 scoop of chocolate frappe powder</p>
                <p>Large (16oz): 1.5 scoops of chocolate frappe powder</p>
                <p>Extra-Large (24oz): 2 scoops of chocolate frappe powder</p>
                <p>Regular (12oz): 1 pump of caramel syrup</p>
                <p>Large (16oz): 1 pump of caramel syrup</p>
                <p>Extra-Large (24oz): 2 pumps of caramel syrup</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
                <p className="recipe-method">Add correct syrup amounts into the blender.</p>
                <p className="recipe-method">Add frappe powder into the blender.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">Add cream and chocolate & caramel sauce in a zig-zag pattern.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">chocolate dream frappe</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>In a blender, add milk</p>
                <p>Regular (12oz): 125ml of milk</p>
                <p>Large (16oz): 150ml of milk</p>
                <p>Extra-Large (24oz): 175ml of milk</p>
                <p>Add in 1 full cup of ice</p>
                <p>Regular (12oz): 1 scoop of chocolate frappe powder</p>
                <p>Large (16oz): 1.5 scoops of chocolate frappe powder</p>
                <p>Extra-Large (24oz): 2 scoops of chocolate frappe powder</p>
                <p>Regular (12oz): 2 pumps of chocolate syrup</p>
                <p>Large (16oz): 3 pumps of chocolate syrup</p>
                <p>Extra-Large (24oz): 4 pumps of chocolate syrup</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
                <p className="recipe-method">Add frappe powder into the blender.</p>
                <p className="recipe-method">Add chocolate syrup into the blender.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">Add cream and a drizzle of chocolate sauce.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">pistachio frappe</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>In a blender, add milk</p>
                <p>Regular (12oz): 100ml of milk</p>
                <p>Large (16oz): 125ml of milk</p>
                <p>Extra-Large (24oz): 150ml of milk</p>
                <p>Add in 1 full cup of ice</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p>Regular (12oz): 1 scoop of frappe powder</p>
                <p>Large (16oz): 1.5 scoops of frappe powder</p>
                <p>Extra-Large (24oz): 2 scoops of frappe powder</p>
                <p>Regular (12oz): 2 pumps of pistachio syrup</p>
                <p>Large (16oz): 3 pumps of pistachio syrup</p>
                <p>Extra-Large (24oz): 4 pumps of pistachio syrup</p>
                <p>Regular (12oz): 1 scoop of chopped pistachios</p>
                <p>Large (16oz): 1.5 scoops of chopped pistachios</p>
                <p>Extra-Large (24oz): 2 scoops of chopped pistachios</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
                <p className="recipe-method">Add frappe powder into the blender.</p>
                <p className="recipe-method">Add pistachio syrup into the blender.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">Add cream and sprinkle chopped pistachios.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">biscoff frappe</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>In a blender, add milk</p>
                <p>Regular (12oz): 100ml of milk</p>
                <p>Large (16oz): 125ml of milk</p>
                <p>Extra-Large (24oz): 150ml of milk</p>
                <p>Add in 1 full cup of ice</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p>Regular (12oz): 1 scoop of frappe powder</p>
                <p>Large (16oz): 1.5 scoops of frappe powder</p>
                <p>Extra-Large (24oz): 2 scoops of frappe powder</p>
                <p>Regular (12oz): 2 pumps of caramel syrup</p>
                <p>Large (16oz): 3 pumps of caramel syrup</p>
                <p>Extra-Large (24oz): 4 pumps of caramel syrup</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
                <p className="recipe-method">Add frappe powder into the blender.</p>
                <p className="recipe-method">Add caramel syrup into the blender.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">Add cream and 1 scoop of biscoff crumbs.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">mint frappe</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>In a blender, add milk</p>
                <p>Regular (12oz): 125ml of milk</p>
                <p>Large (16oz): 150ml of milk</p>
                <p>Extra-Large (24oz): 175ml of milk</p>
                <p>Add in 1 full cup of ice</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p>Regular (12oz): 1 scoop of frappe powder</p>
                <p>Large (16oz): 1.5 scoops of frappe powder</p>
                <p>Extra-Large (24oz): 2 scoops of frappe powder</p>
                <p>Regular (12oz): 2 pumps of peppermint syrup</p>
                <p>Large (16oz): 3 pumps of peppermint syrup</p>
                <p>Extra-Large (24oz): 4 pumps of peppermint syrup</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
                <p className="recipe-method">Add frappe powder into the blender.</p>
                <p className="recipe-method">Add peppermint syrup into the blender.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">If required, add whipped cream.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

            </div>

            <div className="matcha-drinks-container">
              <div className="item-wrapper">
                <p className="drink-title">strawberries & cream matcha latte</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>Regular (12oz): 1 pump of vanilla syrup</p>
                <p>Large (16oz): 2 pumps of vanilla syrup</p>
                <p>Regular (12oz): 3 pumps of strawberry syrup</p>
                <p>Large (16oz): 3 pumps of strawberry syrup</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of matcha into a cup.</p>
                <p className="recipe-method">Add the correct amounts of syrup into a cup.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">blueberry matcha latte</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>Regular (12oz): 1 pump of vanilla syrup</p>
                <p>Large (16oz): 2 pumps of vanilla syrup</p>
                <p>Regular (12oz): 3 pumps of blueberry syrup</p>
                <p>Large (16oz): 3 pumps of blueberry syrup</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of matcha into a cup.</p>
                <p className="recipe-method">Add the correct amounts of syrup into the cup.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">vanilla matcha latte</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>Small (8oz): 2 pumps of vanilla syrup</p>
                <p>Regular (12oz): 3 pumps of vanilla syrup</p>
                <p>Large (16oz): 4 pumps of vanilla syrup</p>
                <p>Small (8oz): 30ml of matcha</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of matcha into a cup.</p>
                <p className="recipe-method">Add the correct amount of vanilla syrup.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">matcha latte</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>Small (8oz): 30ml of matcha</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Pour the correct amount of matcha into a cup.</p>
                <p className="recipe-method">Steam milk and pour it into the cup.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">matcha green tea</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>Small (8oz): 30ml of matcha</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">fill a cup with hot water.</p>
                <p className="recipe-method">Mix matcha with hot water in the cup.</p>
                <p className="recipe-method">Add milk if requested, and stir well.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced strawberries & cream matcha latte</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>fill a cup full of ice</p>
                <p>Regular (12oz): 1 pump of vanilla syrup</p>
                <p>Large (16oz): 2 pumps of vanilla syrup</p>
                <p>Regular (12oz): 3 pumps of strawberry syrup</p>
                <p>Large (16oz): 3 pumps of strawberry syrup</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup with ice.</p>
                <p className="recipe-method">Add the correct amounts of vanilla and strawberry syrup.</p>
                <p className="recipe-method">Pour the correct amount of matcha into the cup.</p>
                <p className="recipe-method">Add oat milk and stir well.</p>
                <p className="recipe-method">use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced blueberry matcha latte</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>add spirulina</p>
                <p>Regular (12oz): 10ml of spirulina</p>
                <p>Large (16oz): 10ml of spirulina</p>
                <p>Regular (12oz): 1 pump of vanilla syrup</p>
                <p>Large (16oz): 2 pumps of vanilla syrup</p>
                <p>Regular (12oz): 3 pumps of blueberry syrup</p>
                <p>Large (16oz): 3 pumps of blueberry syrup</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup with ice.</p>
                <p className="recipe-method">Add spirulina, vanilla syrup, and blueberry syrup.</p>
                <p className="recipe-method">Pour the correct amount of matcha into the cup.</p>
                <p className="recipe-method">Add oat milk and stir well.</p>
                <p className="recipe-method">use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced vanilla matcha latte</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>fill a cup full of ice</p>
                <p>Regular (12oz): 3 pumps of vanilla syrup</p>
                <p>Large (16oz): 4 pumps of vanilla syrup</p>
                <p>Small (8oz): 30ml of matcha</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup with ice.</p>
                <p className="recipe-method">Add vanilla syrup and pour the matcha into the cup.</p>
                <p className="recipe-method">Add milk and stir well.</p>
                <p className="recipe-method">use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced passionfruit matcha lemonade</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>fill a cup full of ice</p>
                <p>Regular (12oz): 3 pumps of passion fruit syrup</p>
                <p>Large (16oz): 4 pumps of passion fruit syrup</p>
                <p>Regular (12oz): 2 pumps of lemonade syrup</p>
                <p>Large (16oz): 2 pumps of lemonade syrup</p>
                <p>add filtered water</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup with ice and add passionfruit syrup and lemonade syrup.</p>
                <p className="recipe-method">Add matcha and top up with filtered water.</p>
                <p className="recipe-method">use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced matcha latte</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>fill a cup full of ice</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup with ice.</p>
                <p className="recipe-method">Add matcha and top with milk.</p>
                <p className="recipe-method">use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced matcha matcha</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>fill a cup full of ice</p>
                <p>Regular (12oz): 2 pumps of chosen syrup</p>
                <p>Large (16oz): 3 pumps of chosen syrup</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup with ice and add the chosen syrup.</p>
                <p className="recipe-method">Pour the matcha into the cup and top with milk.</p>
                <p className="recipe-method">Add cold foam and a sprinkle of matcha powder.</p>
                <p className="recipe-method">use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced matcha green tea</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>fill a cup full of ice</p>
                <p>add filtered water</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Fill a cup with ice, add matcha and filtered water.</p>
                <p className="recipe-method">Add milk if desired and stir well.</p>
                <p className="recipe-method">use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">matcha mint frappe</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>Regular (12oz): 125ml of milk</p>
                <p>Large (16oz): 150ml of milk</p>
                <p>Extra-Large (24oz): 175ml of milk</p>
                <p>Regular (12oz): 1 scoop of frappe powder</p>
                <p>Large (16oz): 1.5 scoops of frappe powder</p>
                <p>Extra-Large (24oz): 2 scoops of frappe powder</p>
                <p>Regular (12oz): 2 pumps of peppermint syrup</p>
                <p>Large (16oz): 3 pumps of peppermint syrup</p>
                <p>Extra-Large (24oz): 4 pumps of peppermint syrup</p>
                <p>Regular (12oz): 40ml of matcha</p>
                <p>Large (16oz): 40ml of matcha</p>
                <p>Extra-Large (24oz): 60ml of matcha</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Blend the milk, ice, frappe powder, and peppermint syrup on setting 1.</p>
                <p className="recipe-method">Add matcha and blend again.</p>
                <p className="recipe-method">Top with whipped cream and matcha powder.</p>
              </div>
            </div>

            <div className="smoothie-container">
              <div className="item-wrapper">
                <p className="drink-title">passion fusion smoothie</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>250ml of apple juice (in a purple jug)</p>
                <p>Protein powder (if required)</p>
                <p>1 Pash n Shoot pouch</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add apple juice to a purple jug.</p>
                <p className="recipe-method">Add protein powder (if required).</p>
                <p className="recipe-method">Add 1 Pash n Shoot pouch.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">Pour into a Regular (12oz) cup.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">berry bliss smoothie</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>250ml of apple juice (in a purple jug)</p>
                <p>Protein powder (if required)</p>
                <p>1 Berry Go Round pouch</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add apple juice to a purple jug.</p>
                <p className="recipe-method">Add protein powder (if required).</p>
                <p className="recipe-method">Add 1 Berry Go Round pouch.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">Pour into a Regular (12oz) cup.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">coco mango smoothie</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>250ml of apple juice (in a purple jug)</p>
                <p>Protein powder (if required)</p>
                <p>1 Coco Loco pouch</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add apple juice to a purple jug.</p>
                <p className="recipe-method">Add protein powder (if required).</p>
                <p className="recipe-method">Add 1 Coco Loco pouch.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">Pour into a Regular (12oz) cup.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">green revitalizer smoothie</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>250ml of apple juice (in a purple jug)</p>
                <p>Protein powder (if required)</p>
                <p>1 Kale Kick pouch</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add apple juice to a purple jug.</p>
                <p className="recipe-method">Add protein powder (if required).</p>
                <p className="recipe-method">Add 1 Kale Kick pouch.</p>
                <p className="recipe-method">Blend on setting 1.</p>
                <p className="recipe-method">Pour into a Regular (12oz) cup.</p>
                <p className="recipe-method">Use a dome lid.</p>
              </div>
            </div>

            {/* These are seasonal drinks which are currently out of season meaning they are not currently being sold at the store. */}
            {/* <div className="seasonal-drinks-container">
              <div className="item-wrapper">
                <p className="drink-title">pumpkin spice latte /// using blue volcano</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>Small (8oz): 1 shot</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>1 pump of cinnamon syrup (all sizes)</p>
                <p>Milk</p>
                <p>Whipped cream</p>
                <p>Pumpkin sauce (for drizzle)</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add espresso shots according to size.</p>
                <p className="recipe-method">Add cinnamon syrup.</p>
                <p className="recipe-method">Fill with milk and stir well.</p>
                <p className="recipe-method">Top with whipped cream and drizzle pumpkin sauce.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced pumpkin spice latte /// using blue volcano</p>
                <p className="ingredients-title">Ingredients:</p>
                <p>Regular (12oz): 2 shots</p>
                <p>Large (16oz): 3 shots</p>
                <p>Extra-Large (24oz): 4 shots</p>
                <p>Regular (12oz): 3 pumps of cinnamon syrup</p>
                <p>Large (16oz): 4 pumps of cinnamon syrup</p>
                <p>Extra-Large (24oz): 5 pumps of cinnamon syrup</p>
                <p>Milk</p>
                <p>Whipped cream</p>
                <p>Pumpkin sauce (for drizzle)</p>
                <p className="steps-title">Steps:</p>
                <p className="recipe-method">Add espresso shots and cinnamon syrup to the cup.</p>
                <p className="recipe-method">Fill the cup with ice.</p>
                <p className="recipe-method">Pour milk over the ice and stir well.</p>
                <p className="recipe-method">Top with whipped cream and drizzle pumpkin sauce.</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">pumpkin spice matcha latte</p>
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

              <div className="item-wrapper">
                <p className="drink-title">iced pumpkin spice matcha latte</p>
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

              <div className="item-wrapper">
                <p className="drink-title">apple crumble matcha latte</p>
                <p>Regular(12oz) = 3 pumps of apple syrup</p>
                <p>Large(16oz) = 4 pumps of apple syrup</p>
                <p>Regular(12oz) = 1 pump of ginger-bread syrup</p>
                <p>Large(16oz) = 1 pump of ginger-bread syrup</p>
                <p>Regular(12oz) = 40ml of matcha</p>
                <p>Large(16oz) = 40ml of matcha</p>
                <p>add oat milk</p>
                <p>if required, add cream and 1 scoop of biscoff crumbs</p>
              </div>

              <div className="item-wrapper">
                <p className="drink-title">iced apple crumble matcha latte</p>
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
            </div> */}

          </div>
        </section>
      )}

      {activeSection === 'hot-coffee' && (
        <div className="recipes-container">
          <div className="coffee-container">
            <div className="item-wrapper wrapper-1">
              <div className="item-text-content">
                <p className="drink-title">espresso</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Single: 1 shot of espresso</p>
                <p>Double: 2 shots of espresso</p>
                <p className="steps-title">Steps:</p>
                <p className='recipe-method'>Pour the shots into an espresso cup.</p>
              </div>
              {/* <img className='espresso-png' src="espresso.png" alt="" /> */}
            </div>

            <div className="item-wrapper wrapper-2">
              <div className="item-text-content">
                <p className="drink-title">espresso con panna</p>
                <p className='ingredients-title'>Ingredients:</p>
                <p>Single: 1 shot of espresso</p>
                <p>Double: 2 shots of espresso</p>
                <p className="steps-title">Steps:</p>
                <p className='recipe-method'>Pour the shots into an espresso cup.</p>
                <p className='recipe-method'>Top off with whipped cream.</p>
              </div>
              {/* <img className='espresso-con-panna' src="espresso-con-panna.png" alt="" /> */}
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Americano</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p className="recipe-method">Fill a cup with hot water.</p>
              <p>Small (8oz): 1 shot</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (20oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the shots into a cup on top of the water.</p>
              <p className="recipe-method">Add a splash of milk if requested.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 1 shot</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (20oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the shots into a cup.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Cappuccino</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 1 shot</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (20oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the shots into a cup.</p>
              <p className="recipe-method">Steam milk until frothy.</p>
              <p className="recipe-method">Pour the frothed milk over the shots, ensuring a thick foam layer on top.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Flat White</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 2 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the shots into an 8oz cup.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Cortado</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 2 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the shots into an 8oz cup.</p>
              <p className="recipe-method">Steam milk and pour it into the cup until it is 3/4 full, maintaining an equal balance of espresso and milk.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Mocha</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 1 pump of chocolate syrup</p>
              <p>Regular (12oz): 2 pumps of chocolate syrup</p>
              <p>Large (16oz): 3 pumps of chocolate syrup</p>
              <p>Extra-Large (20oz): 4 pumps of chocolate syrup</p>
              <p>Small (8oz): 1 shot</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (20oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pump the chocolate syrup into a cup.</p>
              <p className="recipe-method">Pour the shots into a cup.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Spanish Latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 25g of condensed milk</p>
              <p>Regular (12oz): 45g of condensed milk</p>
              <p>Large (16oz): 65g of condensed milk</p>
              <p>Extra-Large (20oz): 85g of condensed milk</p>
              <p>Small (8oz): 1 shot</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (20oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Add correct weight of condensed milk into a steamer tin.</p>
              <p className="recipe-method">Pour the shots into the steamer tin and whisk until it's mixed.</p>
              <p className="recipe-method">Pour the mixture of condensed milk and espresso into a cup</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Pistachio Latte /// Using Blue Volcano</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 1 pump of pistachio syrup</p>
              <p>Regular (12oz): 2 pumps of pistachio syrup</p>
              <p>Large (16oz): 3 pumps of pistachio syrup</p>
              <p>Extra-Large (20oz): 4 pumps of pistachio syrup</p>
              <p>Small (8oz): 1 shot</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (20oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Add pistachio syrup to a cup.</p>
              <p className="recipe-method">Pour the shots into the cup.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
              <p className="recipe-method">Add cream and sprinkle chopped pistachios on top.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">honey cardamom oat latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Regular (12oz): 2 pumps of honey</p>
              <p>Large (16oz): 3 pumps of honey</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">add 2 shakes of cardamom into a cup</p>
              <p className="recipe-method">add 2 shakes of cinnamon into a cup</p>
              <p className="recipe-method">Pump the honey syrup into a cup.</p>
              <p className="recipe-method">Pour the shots into a cup and shake the cup a bit.</p>
              <p className="recipe-method">Steam oat milk and pour it into the cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">coconut latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 1 pump of coconut syrup</p>
              <p>Regular (12oz): 2 pumps of coconut syrup</p>
              <p>Large (16oz): 3 pumps of coconut syrup</p>
              <p>Extra-Large (20oz): 4 pumps of coconut syrup</p>
              <p>Small (8oz): 1 shot</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (20oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pump the coconut syrup into a cup.</p>
              <p className="recipe-method">Pour the shots into a cup and shake the cup a bit.</p>
              <p className="recipe-method">Steam coconut milk and pour it into the cup.</p>
              <p className="recipe-method">top off with whipped cream and with a sprinkle of coconut shavings</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">coco / choco latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 1 pump of coconut syrup</p>
              <p>Regular (12oz): 1 pump of coconut syrup</p>
              <p>Large (16oz): 1 pump of coconut syrup</p>
              <p>Extra-Large (20oz): 2 pumps of coconut syrup</p>
              <p>Small (8oz): 1 pump of chocolate syrup</p>
              <p>Regular (12oz): 1 pump of chocolate syrup</p>
              <p>Large (16oz): 2 pumps of chocolate syrup</p>
              <p>Extra-Large (20oz): 2 pumps of chocolate syrup</p>
              <p>Small (8oz): 1 shot</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (20oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Add coconut syrup and chocolate syrup to a cup.</p>
              <p className="recipe-method">Pour the shots into the cup and gently mix.</p>
              <p className="recipe-method">Steam coconut milk and pour it into the cup.</p>
              <p className="recipe-method">Top with cream, drizzle with chocolate sauce, and sprinkle coconut shavings on top.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">mint-mocha latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 1 pump of peppermint syrup</p>
              <p>Regular (12oz): 1 pump of peppermint syrup</p>
              <p>Large (16oz): 1 pump of peppermint syrup</p>
              <p>Extra-Large (20oz): 2 pumps of peppermint syrup</p>
              <p>Small (8oz): 1 pump of chocolate syrup</p>
              <p>Regular (12oz): 1 pump of chocolate syrup</p>
              <p>Large (16oz): 2 pumps of chocolate syrup</p>
              <p>Extra-Large (20oz): 2 pumps of chocolate syrup</p>
              <p>Small (8oz): 1 shot</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (20oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Add peppermint syrup and chocolate syrup to a cup.</p>
              <p className="recipe-method">Pour the shots into the cup and gently mix.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
              <p className="recipe-method">Top with cream and drizzle chocolate sauce in a zig-zag pattern.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">caramel-mocha latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 1 pump of caramel syrup</p>
              <p>Regular (12oz): 1 pump of caramel syrup</p>
              <p>Large (16oz): 1 pump of caramel syrup</p>
              <p>Extra-Large (20oz): 2 pumps of caramel syrup</p>
              <p>Small (8oz): 1 pump of chocolate syrup</p>
              <p>Regular (12oz): 1 pump of chocolate syrup</p>
              <p>Large (16oz): 2 pumps of chocolate syrup</p>
              <p>Extra-Large (20oz): 2 pumps of chocolate syrup</p>
              <p>Small (8oz): 1 shot</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (20oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Add caramel syrup and chocolate syrup to a cup.</p>
              <p className="recipe-method">Pour the shots into the cup and gently mix.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
              <p className="recipe-method">Top with cream and drizzle chocolate and caramel sauce in a zig-zag pattern.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">filter brew</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">fill cup with filter coffee</p>
              <p className="recipe-method">if ordered, add a splash of milk into the cup.</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'iced-coffee' && (
        <div className="recipes-container">
          <div className="coffee-container">
            <div className="item-wrapper">
              <p className="drink-title">Iced Americano</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Fill a cup full of ice</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup full of ice.</p>
              <p className="recipe-method">Add filtered water.</p>
              <p className="recipe-method">If requested, add milk.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Iced Latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Fill a cup full of ice</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup full of ice.</p>
              <p className="recipe-method">Pour cold milk into the cup.</p>
              <p className="recipe-method">Pour the shots into the cup.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Iced Latte with Cold Foam</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Fill a cup full of ice</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup full of ice.</p>
              <p className="recipe-method">Pour cold milk to 3/4 of the way into the cup.</p>
              <p className="recipe-method">Pour the shots into the cup.</p>
              <p className="recipe-method">Add cold foam to the top.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced mocha</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Fill a cup full of ice</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p>Regular (12oz): 2 pumps of chocolate syrup</p>
              <p>Large (16oz): 3 pumps of chocolate syrup</p>
              <p>Extra-Large (24oz): 4 pumps of chocolate syrup</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup full of ice.</p>
              <p className="recipe-method">Pour cold milk into the cup.</p>
              <p className="recipe-method">Add the appropriate number of shots.</p>
              <p className="recipe-method">Add the chocolate syrup and stir well.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced spanish latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Fill a cup full of ice</p>
              <p>Regular (12oz): 45g of condensed milk</p>
              <p>Large (16oz): 65g of condensed milk</p>
              <p>Extra-Large (24oz): 85g of condensed milk</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup full of ice.</p>
              <p className="recipe-method">Whisk espresso and condensed milk together.</p>
              <p className="recipe-method">Pour the mixture into the cup over the ice.</p>
              <p className="recipe-method">Add cold milk to fill the rest of the cup.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced honey oat cardamom latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Fill a cup full of ice</p>
              <p>Regular (12oz): 2 shakes of cardamom</p>
              <p>Large (16oz): 3 shakes of cardamom</p>
              <p>Extra-Large (24oz): 4 shakes of cardamom</p>
              <p>Regular (12oz): 2 pumps of honey</p>
              <p>Large (16oz): 3 pumps of honey</p>
              <p>Extra-Large (24oz): 4 pumps of honey</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup full of ice.</p>
              <p className="recipe-method">Add cardamom and honey to the cup.</p>
              <p className="recipe-method">Pour the shots into the cup.</p>
              <p className="recipe-method">Add oat milk and stir well.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced vanilla-oat latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Fill a cup full of ice</p>
              <p>Regular (12oz): 2 pumps of vanilla syrup</p>
              <p>Large (16oz): 3 pumps of vanilla syrup</p>
              <p>Extra-Large (24oz): 4 pumps of vanilla syrup</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup full of ice.</p>
              <p className="recipe-method">Add the vanilla syrup to the cup.</p>
              <p className="recipe-method">Pour the shots into the cup.</p>
              <p className="recipe-method">Add oat milk and stir well.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'iced-non-coffee' && (
        <div className="recipes-container">
          <div className="coffee-container">
            <div className="item-wrapper">
              <p className="drink-title">iced chai</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Fill a cup full of ice</p>
              <p>Regular (12oz): 1 pump of chai syrup</p>
              <p>Large (16oz): 1.5 pumps of chai syrup</p>
              <p>Extra-Large (24oz): 2 pumps of chai syrup</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup full of ice.</p>
              <p className="recipe-method">Add chai syrup and stir well.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced tea</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Fill a cup full of ice</p>
              <p>Fill 3/4 full with iced tea if cold foam is added</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup full of ice.</p>
              <p className="recipe-method">Add iced tea (3/4 full if cold foam is added).</p>
              <p className="recipe-method">If required, add syrups and stir.</p>
              <p className="recipe-method">If required, add cold foam and stir.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced strawberries & cream matcha latte</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>fill a cup full of ice</p>
              <p>Regular (12oz): 1 pump of vanilla syrup</p>
              <p>Large (16oz): 2 pumps of vanilla syrup</p>
              <p>Regular (12oz): 3 pumps of strawberry syrup</p>
              <p>Large (16oz): 3 pumps of strawberry syrup</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup with ice.</p>
              <p className="recipe-method">Add the correct amounts of vanilla and strawberry syrup.</p>
              <p className="recipe-method">Pour the correct amount of matcha into the cup.</p>
              <p className="recipe-method">Add oat milk and stir well.</p>
              <p className="recipe-method">use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced blueberry matcha latte</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>add spirulina</p>
              <p>Regular (12oz): 10ml of spirulina</p>
              <p>Large (16oz): 10ml of spirulina</p>
              <p>Regular (12oz): 1 pump of vanilla syrup</p>
              <p>Large (16oz): 2 pumps of vanilla syrup</p>
              <p>Regular (12oz): 3 pumps of blueberry syrup</p>
              <p>Large (16oz): 3 pumps of blueberry syrup</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup with ice.</p>
              <p className="recipe-method">Add spirulina, vanilla syrup, and blueberry syrup.</p>
              <p className="recipe-method">Pour the correct amount of matcha into the cup.</p>
              <p className="recipe-method">Add oat milk and stir well.</p>
              <p className="recipe-method">use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced vanilla matcha latte</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>fill a cup full of ice</p>
              <p>Regular (12oz): 3 pumps of vanilla syrup</p>
              <p>Large (16oz): 4 pumps of vanilla syrup</p>
              <p>Small (8oz): 30ml of matcha</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup with ice.</p>
              <p className="recipe-method">Add vanilla syrup and pour the matcha into the cup.</p>
              <p className="recipe-method">Add milk and stir well.</p>
              <p className="recipe-method">use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced passionfruit matcha lemonade</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>fill a cup full of ice</p>
              <p>Regular (12oz): 3 pumps of passion fruit syrup</p>
              <p>Large (16oz): 4 pumps of passion fruit syrup</p>
              <p>Regular (12oz): 2 pumps of lemonade syrup</p>
              <p>Large (16oz): 2 pumps of lemonade syrup</p>
              <p>add filtered water</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup with ice and add passionfruit syrup and lemonade syrup.</p>
              <p className="recipe-method">Add matcha and top up with filtered water.</p>
              <p className="recipe-method">use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced matcha latte</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>fill a cup full of ice</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup with ice.</p>
              <p className="recipe-method">Add matcha and top with milk.</p>
              <p className="recipe-method">use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced matcha matcha</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>fill a cup full of ice</p>
              <p>Regular (12oz): 2 pumps of chosen syrup</p>
              <p>Large (16oz): 3 pumps of chosen syrup</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup with ice and add the chosen syrup.</p>
              <p className="recipe-method">Pour the matcha into the cup and top with milk.</p>
              <p className="recipe-method">Add cold foam and a sprinkle of matcha powder.</p>
              <p className="recipe-method">use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">iced matcha green tea</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>fill a cup full of ice</p>
              <p>add filtered water</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Fill a cup with ice, add matcha and filtered water.</p>
              <p className="recipe-method">Add milk if desired and stir well.</p>
              <p className="recipe-method">use a dome lid.</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'frappes' && (
        <div className="recipes-container">
          <div className="coffee-container">
            <div className="item-wrapper">
              <p className="drink-title">coffee frappe</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Regular(12oz): 100ml of milk</p>
              <p>Large(16oz): 125ml of milk</p>
              <p>Extra-Large(24oz): 150ml of milk</p>
              <p>Add in 1 full cup of ice</p>
              <p>Regular(12oz): 2 shots</p>
              <p>Large(16oz): 3 shots</p>
              <p>Extra-Large(24oz): 4 shots</p>
              <p>Regular(12oz): 1 scoop of frappe powder</p>
              <p>Large(16oz): 1.5 scoops of frappe powder</p>
              <p>Extra-Large(24oz): 2 scoops of frappe powder</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
              <p className="recipe-method">Add frappe powder into the blender.</p>
              <p className="recipe-method">Blend on setting 1.</p>
              <p className="recipe-method">Add cream.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">coconut frappe</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Regular(12oz): 100ml of milk</p>
              <p>Large(16oz): 125ml of milk</p>
              <p>Extra-Large(24oz): 150ml of milk</p>
              <p>Add in 1 full cup of ice</p>
              <p>Regular(12oz): 2 shots</p>
              <p>Large(16oz): 3 shots</p>
              <p>Extra-Large(24oz): 4 shots</p>
              <p>Regular(12oz): 1 scoop of frappe powder</p>
              <p>Large(16oz): 1.5 scoops of frappe powder</p>
              <p>Extra-Large(24oz): 2 scoops of frappe powder</p>
              <p>Regular(12oz): 2 pumps of coconut syrup</p>
              <p>Large(16oz): 3 pumps of coconut syrup</p>
              <p>Extra-Large(24oz): 4 pumps of coconut syrup</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
              <p className="recipe-method">Add correct syrup amounts into the blender.</p>
              <p className="recipe-method">Add frappe powder into the blender.</p>
              <p className="recipe-method">Blend on setting 1</p>
              <p className="recipe-method">Add cream and 1 sprinkle of coconut shavings</p>
              <p className="recipe-method">Use a dome lid</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">coco-choco frappe</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Regular(12oz): 100ml of milk</p>
              <p>Large(16oz): 125ml of milk</p>
              <p>Extra-Large(24oz): 150ml of milk</p>
              <p>Add in 1 full cup of ice</p>
              <p>Regular(12oz): 2 shots</p>
              <p>Large(16oz): 3 shots</p>
              <p>Extra-Large(24oz): 4 shots</p>
              <p>Regular(12oz): 1 scoop of frappe powder</p>
              <p>Large(16oz): 1.5 scoops of frappe powder</p>
              <p>Extra-Large(24oz): 2 scoops of frappe powder</p>
              <p>Regular(12oz): 1 pump of coconut syrup</p>
              <p>Large(16oz): 1.5 pumps of coconut syrup</p>
              <p>Extra-Large(24oz): 2 pumps of coconut syrup</p>
              <p>Regular(12oz): 1 pump of chocolate syrup</p>
              <p>Large(16oz): 1.5 pumps of chocolate syrup</p>
              <p>Extra-Large(24oz): 2 pumps of chocolate syrup</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
              <p className="recipe-method">Add correct syrup amounts into the blender.</p>
              <p className="recipe-method">Add frappe powder into the blender.</p>
              <p className="recipe-method">Blend on setting 1</p>
              <p className="recipe-method">Add cream and 1 sprinkle of coconut shavings</p>
              <p className="recipe-method">Use a dome lid</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">mint-mocha frappe</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>In a blender, add milk</p>
              <p>Regular (12oz): 100ml of milk</p>
              <p>Large (16oz): 125ml of milk</p>
              <p>Extra-Large (24oz): 150ml of milk</p>
              <p>Add in 1 full cup of ice</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p>Regular (12oz): 1 scoop of frappe powder</p>
              <p>Large (16oz): 1.5 scoops of frappe powder</p>
              <p>Extra-Large (24oz): 2 scoops of frappe powder</p>
              <p>Regular (12oz): 1 pump of chocolate syrup</p>
              <p>Large (16oz): 2 pumps of chocolate syrup</p>
              <p>Extra-Large (24oz): 2 pumps of chocolate syrup</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
              <p className="recipe-method">Add correct syrup amounts into the blender.</p>
              <p className="recipe-method">Add frappe powder into the blender.</p>
              <p className="recipe-method">Blend on setting 1.</p>
              <p className="recipe-method">Add cream and chocolate sauce in a zig-zag pattern.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">caramel-mocha frappe</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>In a blender, add milk</p>
              <p>Regular (12oz): 100ml of milk</p>
              <p>Large (16oz): 125ml of milk</p>
              <p>Extra-Large (24oz): 150ml of milk</p>
              <p>Add in 1 full cup of ice</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p>Regular (12oz): 1 scoop of chocolate frappe powder</p>
              <p>Large (16oz): 1.5 scoops of chocolate frappe powder</p>
              <p>Extra-Large (24oz): 2 scoops of chocolate frappe powder</p>
              <p>Regular (12oz): 1 pump of caramel syrup</p>
              <p>Large (16oz): 1 pump of caramel syrup</p>
              <p>Extra-Large (24oz): 2 pumps of caramel syrup</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
              <p className="recipe-method">Add correct syrup amounts into the blender.</p>
              <p className="recipe-method">Add frappe powder into the blender.</p>
              <p className="recipe-method">Blend on setting 1.</p>
              <p className="recipe-method">Add cream and chocolate & caramel sauce in a zig-zag pattern.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">chocolate dream frappe</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>In a blender, add milk</p>
              <p>Regular (12oz): 125ml of milk</p>
              <p>Large (16oz): 150ml of milk</p>
              <p>Extra-Large (24oz): 175ml of milk</p>
              <p>Add in 1 full cup of ice</p>
              <p>Regular (12oz): 1 scoop of chocolate frappe powder</p>
              <p>Large (16oz): 1.5 scoops of chocolate frappe powder</p>
              <p>Extra-Large (24oz): 2 scoops of chocolate frappe powder</p>
              <p>Regular (12oz): 2 pumps of chocolate syrup</p>
              <p>Large (16oz): 3 pumps of chocolate syrup</p>
              <p>Extra-Large (24oz): 4 pumps of chocolate syrup</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
              <p className="recipe-method">Add frappe powder into the blender.</p>
              <p className="recipe-method">Add chocolate syrup into the blender.</p>
              <p className="recipe-method">Blend on setting 1.</p>
              <p className="recipe-method">Add cream and a drizzle of chocolate sauce.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">pistachio frappe</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>In a blender, add milk</p>
              <p>Regular (12oz): 100ml of milk</p>
              <p>Large (16oz): 125ml of milk</p>
              <p>Extra-Large (24oz): 150ml of milk</p>
              <p>Add in 1 full cup of ice</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p>Regular (12oz): 1 scoop of frappe powder</p>
              <p>Large (16oz): 1.5 scoops of frappe powder</p>
              <p>Extra-Large (24oz): 2 scoops of frappe powder</p>
              <p>Regular (12oz): 2 pumps of pistachio syrup</p>
              <p>Large (16oz): 3 pumps of pistachio syrup</p>
              <p>Extra-Large (24oz): 4 pumps of pistachio syrup</p>
              <p>Regular (12oz): 1 scoop of chopped pistachios</p>
              <p>Large (16oz): 1.5 scoops of chopped pistachios</p>
              <p>Extra-Large (24oz): 2 scoops of chopped pistachios</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
              <p className="recipe-method">Add frappe powder into the blender.</p>
              <p className="recipe-method">Add pistachio syrup into the blender.</p>
              <p className="recipe-method">Blend on setting 1.</p>
              <p className="recipe-method">Add cream and sprinkle chopped pistachios.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">biscoff frappe</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>In a blender, add milk</p>
              <p>Regular (12oz): 100ml of milk</p>
              <p>Large (16oz): 125ml of milk</p>
              <p>Extra-Large (24oz): 150ml of milk</p>
              <p>Add in 1 full cup of ice</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p>Regular (12oz): 1 scoop of frappe powder</p>
              <p>Large (16oz): 1.5 scoops of frappe powder</p>
              <p>Extra-Large (24oz): 2 scoops of frappe powder</p>
              <p>Regular (12oz): 2 pumps of caramel syrup</p>
              <p>Large (16oz): 3 pumps of caramel syrup</p>
              <p>Extra-Large (24oz): 4 pumps of caramel syrup</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
              <p className="recipe-method">Add frappe powder into the blender.</p>
              <p className="recipe-method">Add caramel syrup into the blender.</p>
              <p className="recipe-method">Blend on setting 1.</p>
              <p className="recipe-method">Add cream and 1 scoop of biscoff crumbs.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">mint frappe</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>In a blender, add milk</p>
              <p>Regular (12oz): 125ml of milk</p>
              <p>Large (16oz): 150ml of milk</p>
              <p>Extra-Large (24oz): 175ml of milk</p>
              <p>Add in 1 full cup of ice</p>
              <p>Regular (12oz): 2 shots</p>
              <p>Large (16oz): 3 shots</p>
              <p>Extra-Large (24oz): 4 shots</p>
              <p>Regular (12oz): 1 scoop of frappe powder</p>
              <p>Large (16oz): 1.5 scoops of frappe powder</p>
              <p>Extra-Large (24oz): 2 scoops of frappe powder</p>
              <p>Regular (12oz): 2 pumps of peppermint syrup</p>
              <p>Large (16oz): 3 pumps of peppermint syrup</p>
              <p>Extra-Large (24oz): 4 pumps of peppermint syrup</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of milk into the blender.</p>
              <p className="recipe-method">Add frappe powder into the blender.</p>
              <p className="recipe-method">Add peppermint syrup into the blender.</p>
              <p className="recipe-method">Blend on setting 1.</p>
              <p className="recipe-method">If required, add whipped cream.</p>
              <p className="recipe-method">Use a dome lid.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">matcha mint frappe</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>Regular (12oz): 125ml of milk</p>
              <p>Large (16oz): 150ml of milk</p>
              <p>Extra-Large (24oz): 175ml of milk</p>
              <p>Regular (12oz): 1 scoop of frappe powder</p>
              <p>Large (16oz): 1.5 scoops of frappe powder</p>
              <p>Extra-Large (24oz): 2 scoops of frappe powder</p>
              <p>Regular (12oz): 2 pumps of peppermint syrup</p>
              <p>Large (16oz): 3 pumps of peppermint syrup</p>
              <p>Extra-Large (24oz): 4 pumps of peppermint syrup</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p>Extra-Large (24oz): 60ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Blend the milk, ice, frappe powder, and peppermint syrup on setting 1.</p>
              <p className="recipe-method">Add matcha and blend again.</p>
              <p className="recipe-method">Top with whipped cream and matcha powder.</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'hot-non-coffee' && (
        <div className="recipes-container">
          <div className="coffee-container">
            <div className="item-wrapper">
              <p className="drink-title">chai latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p className="recipe-method">Regular (12oz): 1 pump of chai</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Add chai syrup to a cup.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
              <p className="recipe-method">Top off with 1 sprinkle of cinnamon</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">turmeric latte</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Regular (12oz): 150g of turmeric mixture</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour proper amount of turmeric mixture into a tin.</p>
              <p className="recipe-method">Pour oat milk into the same tin.</p>
              <p className="recipe-method">Steam the oat milk and turmeric mixture and pour into a cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">hot chocolate</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (8oz): 40g of chocolate powder</p>
              <p>Regular (12oz): 60g of chocolate powder</p>
              <p>Large (16oz): 80g of chocolate powder</p>
              <p>Extra-Large (20oz): 100g of chocolate powder</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Add proper amount of chocolate powder mixture into a tin.</p>
              <p className="recipe-method">Pour milk into the same tin.</p>
              <p className="recipe-method">Steam the milk and chocolate powder and pour into a cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Babyccino</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Steam milk</p>
              <p>Regular (4oz): Pour into 4oz cup</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Steam the milk.</p>
              <p className="recipe-method">Pour the milk into a 4oz cup.</p>
              <p className="recipe-method">If required, add 1 sprinkle of chocolate powder on top.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">Puppaccino</p>
              <p className='ingredients-title'>Ingredients:</p>
              <p>Small (4oz): 1 dog treat</p>
              <p>Large (8oz): 2 dog treats</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Add whipped cream into a Small cup (4oz), then add 1 dog treat.</p>
              <p className="recipe-method">Add whipped cream into a Large cup (8oz), then add 2 dog treats.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">strawberries & cream matcha latte</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>Regular (12oz): 1 pump of vanilla syrup</p>
              <p>Large (16oz): 2 pumps of vanilla syrup</p>
              <p>Regular (12oz): 3 pumps of strawberry syrup</p>
              <p>Large (16oz): 3 pumps of strawberry syrup</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of matcha into a cup.</p>
              <p className="recipe-method">Add the correct amounts of syrup into a cup.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">blueberry matcha latte</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>Regular (12oz): 1 pump of vanilla syrup</p>
              <p>Large (16oz): 2 pumps of vanilla syrup</p>
              <p>Regular (12oz): 3 pumps of blueberry syrup</p>
              <p>Large (16oz): 3 pumps of blueberry syrup</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of matcha into a cup.</p>
              <p className="recipe-method">Add the correct amounts of syrup into the cup.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">vanilla matcha latte</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>Small (8oz): 2 pumps of vanilla syrup</p>
              <p>Regular (12oz): 3 pumps of vanilla syrup</p>
              <p>Large (16oz): 4 pumps of vanilla syrup</p>
              <p>Small (8oz): 30ml of matcha</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of matcha into a cup.</p>
              <p className="recipe-method">Add the correct amount of vanilla syrup.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">matcha latte</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>Small (8oz): 30ml of matcha</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">Pour the correct amount of matcha into a cup.</p>
              <p className="recipe-method">Steam milk and pour it into the cup.</p>
            </div>

            <div className="item-wrapper">
              <p className="drink-title">matcha green tea</p>
              <p className="ingredients-title">Ingredients:</p>
              <p>Small (8oz): 30ml of matcha</p>
              <p>Regular (12oz): 40ml of matcha</p>
              <p>Large (16oz): 40ml of matcha</p>
              <p className="steps-title">Steps:</p>
              <p className="recipe-method">fill a cup with hot water.</p>
              <p className="recipe-method">Mix matcha with hot water in the cup.</p>
              <p className="recipe-method">Add milk if requested, and stir well.</p>
            </div>

          </div>
        </div>
      )}

      {/* {activeSection === 'waffles' && ( 

      )} */}

      {/* {activeSection === 'prepping-guide' && ( 

      )} */}


    </div>
  )
}

export default App
