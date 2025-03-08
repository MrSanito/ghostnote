export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-400">
            Learn more about our mission, values, and the team behind our
            success.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            Our mission is to provide the best services and solutions to our
            customers. We strive to achieve excellence in every project we
            undertake and ensure customer satisfaction.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Focus</li>
            <li>Teamwork</li>
            <li>Excellence</li>
          </ul>
        </section>

        <footer className="text-center mt-12">
          <p className="text-gray-500">
            &copy; 2025 Your Company. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
