export default function MenuPage() {
  return (
    <main className="min-h-screen px-4 pt-24 pb-20 max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-heading mb-6 text-center">
        Our Menu
      </h1>
      <p className="text-gray-300 font-sans text-center mb-12">
        An elevated selection of signature rolls, handcrafted appetizers, and
        premium sushi.
      </p>

      {[
        {
          title: "Appetizers",
          items: [
            [
              "Black Edamame (Black)",
              "Steamed / Seasoned with Truffle Salt – $6",
            ],
            [
              "Gyoza (Steamed or Pan-Fried)",
              "Choice of Angus Beef or Veggie – 6pc $10 / 3pc $5",
            ],
            ["Seaweed Salad", "Marinated seaweed with sesame dressing – $5"],
            [
              "Lobster Cigar",
              "Lobster & Crab Mix, Avocado, Cream Cheese, Spring Roll Sheet – $18",
            ],
            [
              "Avocado Dragon Ball",
              "Shrimp Tempura, Tuna*, Crab, Fresh Avocado, Sweet & Spicy Sauce – $15",
            ],
            [
              "Bluefin Tuna Tataki",
              "Lightly Seared Bluefin Tuna, Tataki Sauce – $25",
            ],
            ["Hamachi Crudo", "Amberjack Sashimi, Jalapeño, Yuzu Ponzu – $21"],
            [
              "Sushi / Sashimi Appetizer",
              "Bluefin Tuna, Scottish Salmon, Hamachi, White Tuna, Sweet Shrimp – $18",
            ],
          ],
        },
        {
          title: "Classic House Rolls",
          items: [
            ["California Roll", "Crab Stick, Cucumber, Avocado – $8"],
            ["Spicy Tuna Roll", "Spicy Tuna*, Cucumber – $9"],
            ["Philadelphia Roll", "Smoked Salmon, Cream Cheese, Avocado – $10"],
            ["Eel Avocado Roll", "Baked BBQ Eel, Avocado – $9"],
            ["Tuna Avocado Roll", "Tuna*, Avocado – $9"],
            ["Salmon Avocado Roll", "Salmon*, Avocado – $9"],
            ["Yellowtail Roll", "Yellowtail*, Green Onion – $9"],
            ["Tuna Roll", "Hawaiian Bigeye Tuna* – $7"],
            ["Salmon Roll", "Scottish Salmon* – $7"],
            ["Cucumber Roll", "– $4"],
            ["Avocado Roll", "– $4"],
            ["Asparagus Roll", "– $5"],
            ["A.A.C. Roll", "Avocado, Asparagus, Cucumber – $6"],
            ["Sweet Potato Roll", "Deep Fried Sweet Potato – $10"],
          ],
        },
        {
          title: "Baked Rolls",
          items: [
            [
              "The Highland",
              "Crab, Avocado, Cream Cheese, topped with Baked Scottish Salmon – $15",
            ],
            [
              "S.O.S.",
              "Shrimp Tempura, Cucumber, topped with Spicy Crab, Baked with Spicy Mayo & Eel Sauce – $15",
            ],
            [
              "Volcano Roll",
              "Crab Meat, Cream Cheese, Avocado, topped with Spicy Crab, Scallop, Mozzarella, Spicy Mayo, Eel Sauce – $18",
            ],
          ],
        },
        {
          title: "Specialty Rolls",
          items: [
            [
              "Black Dragon",
              "Shrimp Tempura, Cucumber, Avocado, topped with BBQ Eel (5oz) – $17",
            ],
            [
              "Red Tide",
              "Shrimp Tempura, Cucumber, topped with Spicy Crab, Spicy Mayo – $16",
            ],
            [
              "Tiger Roll",
              "Soft Shell Crab, topped with Spicy Tuna*, Jalapeño, Spicy Mayo, Eel Sauce – $18",
            ],
            [
              "Crunchy Dragon",
              "Shrimp Tempura, Avocado, topped with Sushi Shrimp, Tempura Flakes, Spicy Mayo – $17",
            ],
            [
              "King Salmon Roll",
              "Spicy Salmon*, Cucumber, topped with Salmon*, Green Onion, Red Tobiko, Wasabi Mayo – $18",
            ],
            [
              "Pop Star",
              "Shrimp Tempura, Cream Cheese, Cucumber, topped with Crab Meat, Tempura Flakes, Eel Sauce – $18",
            ],
            [
              "Rainbow Coast",
              "Crab, Cucumber, Avocado, topped with Tuna*, Salmon*, Sushi Shrimp, Avocado – $17",
            ],
          ],
        },
        {
          title: "Signature Rolls",
          items: [
            [
              "Empire Heat",
              "Spicy Salmon*, Cucumber, topped with Spicy Tuna*, Jalapeño, Spicy Mayo – $15",
            ],
            [
              "Ryuu Roll",
              "Crab Meat, Avocado, topped with Lemon, Salmon* – $14",
            ],
            [
              "Motor City",
              "Shrimp Tempura, Cream Cheese, Asparagus, topped with Premium Beef, Eel Sauce, Wow Sauce – $21",
            ],
            [
              "Angry Shrimp",
              "Shrimp Tempura, Spicy Tuna, Avocado, topped with Crab, Spicy Mayo, Eel Sauce – $19",
            ],
            [
              "White Flame",
              "Shrimp Tempura, Spicy Tuna, Avocado, topped with Seared White Tuna*, Eel Sauce – $17",
            ],
            [
              "Geisha",
              "Cucumber Sheet, Tuna*, Salmon*, Crab Salad, Avocado, Ponzu – $16",
            ],
            [
              "Sakura",
              "Soft Shell Crab, Crab Meat, Asparagus, Lettuce, Avocado, Soy Wrap, Special Soy Sauce – $19",
            ],
          ],
        },
        {
          title: "Signature Tempura Rolls",
          items: [
            [
              "Firecracker",
              "Shrimp Tempura, Mozzarella Cheese, Jalapeño, Spicy Tuna, Eel Sauce, Spicy Mayo – $15",
            ],
            [
              "Las Vegas",
              "Salmon, Avocado, Cream Cheese, Deep Fried and topped with Jalapeño, Spicy Mayo, Sriracha – $14",
            ],
            [
              "Cali Crunch",
              "Crab Meat, Avocado, Deep Fried, Eel Sauce, Spicy Mayo – $12",
            ],
            [
              "Ninja",
              "Crab Meat, Avocado, Cream Cheese, Deep Fried, Eel Sauce – $13",
            ],
            [
              "Paradise",
              "Spicy Salmon, Crab Meat, Tamago, Shrimp Tempura, Avocado, White Tuna, Deep Fried, Eel Sauce, Spicy Mayo – $18",
            ],
            [
              "Hockeytown",
              "Spicy Tuna, Eel, Cream Cheese, topped with Rich Sweet Sauce, Baked in Oven with Eel Sauce – $16",
            ],
          ],
        },
        {
          title: "Soup & Salad",
          items: [
            ["Shiro Miso Soup", "– $4"],
            ["House Salad", "– $6"],
            [
              "Tuna Salad",
              "Tuna Poke, Mixed Greens, Avocado, Poke Soy Sauce – $14",
            ],
            [
              "Salmon Salad",
              "Salmon Poke, Mixed Greens, Avocado, Poke Soy Sauce – $14",
            ],
          ],
        },
        {
          title: "Sushi & Sashimi Platters",
          items: [
            [
              "Chef’s Select",
              "6pc Chef’s Choice Sushi + California Roll – $24",
            ],
            ["Tokyo Ten", "10pc Chef’s Choice Sushi + California Roll – $30"],
            [
              "Ocean’s Twelve",
              "12pc Chef’s Choice Sashimi + Salmon Roll – $38",
            ],
            ["The Deep End", "18pc Chef’s Choice Sashimi + Tuna Roll – $55"],
          ],
        },
      ].map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-xl md:text-2xl font-heading uppercase tracking-wider mb-4">
            {section.title}
          </h2>
          <ul className="space-y-2 text-white/80 font-sans">
            {section.items.map(([name, desc]) => (
              <li key={name}>
                <span className="font-medium text-white">{name}</span>
                <br />
                <span className="text-sm">{desc}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="text-xs text-white/50 mt-16 leading-relaxed">
        * A 3% surcharge applies to non-cash payments, reflecting processing
        costs.
        <br />
        For items prepared raw or cooked to order, please consult your server.
        <br />* Notice: Consuming raw or undercooked meats, poultry, seafood,
        shellfish, or eggs may increase your risk of food-borne illness.
      </p>
    </main>
  );
}
