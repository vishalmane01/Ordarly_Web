"use client";
import { motion } from "framer-motion";
import customization from "@/assets/customization.png";
import pricing from "@/assets/pricing.png";
import innovation from "@/assets/innovation.png";
import support from "@/assets/support.png";

export default function WhyCustomersLoveUs() {
  return (
    <section
      id="bento-grid"
      className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Customers Love Us</h2>
        <p className="text-base md:text-lg text-muted-foreground">
          From innovation to support, we deliver everything your restaurant needs to thrive.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Row 1 - 2:1 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="col-span-1 md:col-span-2 bg-card rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center border border-border"
        >
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Your Restaurant, Your POS</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Just like your restaurant, your logo, and your theme — your POS should feel truly yours.
              With full customization, Ordarly adapts to your brand so perfectly it feels built just for you.
            </p>
          </div>
          <img
            src={customization}
            alt="Customization"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto mt-6 md:mt-0 md:ml-6"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="col-span-1 bg-card rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center border border-border"
        >
          <img
            src={pricing}
            alt="Pricing"
            className="w-full max-w-xs sm:max-w-sm h-auto mb-6"
          />
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Pricing</h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Industry-low, transparent pricing models designed to scale your business.
            No hidden charges, just clarity and value.
          </p>
        </motion.div>

        {/* Row 2 - 1:2 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="col-span-1 bg-card rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center border border-border"
        >
          <img
            src={innovation}
            alt="Innovation"
            className="w-full max-w-xs sm:max-w-sm h-auto mb-6"
          />
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Continuous Innovation</h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Our platform never stands still — we’re committed to continuous improvements so your
            operations run smoother, faster, and smarter over time.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="col-span-1 md:col-span-2 bg-card rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center border border-border"
        >
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Our dedicated support team is always ready to help you anytime — via call, chat, or email.
            </p>
          </div>
          <img
            src={support}
            alt="24/7 Support"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto mt-6 md:mt-0 md:ml-6"
          />
        </motion.div>
      </div>
    </section>
  );
}
