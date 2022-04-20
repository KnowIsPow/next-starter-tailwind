import Page from 'features/page';
import { useState } from 'react';
import { siteLogo, siteLogoAlt, siteLogoSubmark } from 'site_configuration';
import Button from 'ui/form/button';
import TextInput from 'ui/form/input';
import NumberInput from 'ui/form/input/number-input';
import PhoneNumberInput from 'ui/form/input/phone-number-input';
import TextAreaInput from 'ui/form/input/text-area-input';
import Image from 'ui/image';

export const colors = [
  { name: 'Primary Color', color: 'bg-primary', lightContent: true },
  { name: 'Accent', color: 'bg-accent', lightContent: false },
  { name: 'Black', color: 'bg-black', lightContent: true },
  { name: 'White', color: 'bg-white border border-2', lightContent: false },
  { name: 'Alternative 1', color: 'bg-alt1', lightContent: true },
  { name: 'Alternative 2', color: 'bg-alt2', lightContent: true }
];

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.`;

export default function BrandPage({}) {
  const [text, setText] = useState();
  const [longText, setLongText] = useState();
  const [number, setNumber] = useState();
  const [phone, setPhone] = useState();

  return (
    <Page title="Brand" description="Page Branding" canonical="/brand">
      <main className="text-gray-300 content">
        <section className="flex flex-col items-center py-12 space-y-8 border-b">
          <Image
            alt="Primary Logo"
            src={siteLogo.src}
            className="p-8 bg-gray-50"
          />
          <h2>Primary Logo</h2>
        </section>
        <section className="flex py-12 border-b divide-x">
          <div className="flex flex-col items-center flex-1 px-2 py-8 space-y-4">
            <Image
              alt="Primary Logo Variation"
              src={siteLogoAlt.src}
              className="p-6 bg-black"
            />
            <h2>Logo Variation</h2>
          </div>
          <div className="flex flex-col items-center flex-1 py-8 space-y-4">
            <Image
              alt="Primary Logo Submark"
              src={siteLogoSubmark.src}
              className="p-8"
            />
            <h2>Submark</h2>
          </div>
        </section>
        <section className="py-12 border-b">
          <div className="flex flex-wrap gap-12 justify-evenly">
            {colors.map((color) => {
              return (
                <div
                  key={color.color}
                  className="flex flex-col items-center space-y-8 text-center"
                >
                  <h2 className="text-sm text-gray-400">{color.name}</h2>
                  <div
                    className={`h-28 w-28 rounded-full ${color.color}`}
                  ></div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="py-12 border-b">
          <div className="flex flex-wrap justify-center gap-4">
            {colors.map((color) => {
              return (
                <Image
                  alt="Primary Logo With Color Background"
                  key={color.color}
                  src={color.lightContent ? siteLogoAlt.src : siteLogo.src}
                  className={`p-8 ${color.color}`}
                />
              );
            })}
          </div>
        </section>
        <section className="py-12 text-gray-700 border-b">
          <div className="mb-8 text-xl text-gray-400 display">Typography</div>
          <h2 className="text-gray-800">{alphabet}</h2>
          <h2 className="mb-8 text-gray-800 lowercase">{alphabet}</h2>

          {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((Tag, index) => {
            return (
              <div key={Tag} className="mb-4">
                <Tag className="mb-2">Header {index + 1}</Tag>
                <p>{lorem}</p>
              </div>
            );
          })}
        </section>
        <section className="py-12 text-gray-700 border-b">
          <div className="mb-8 text-xl text-gray-400 display">Components</div>
          <Button>Primary Button</Button>
          <Button className="ml-2 btn-secondary">Secondary Button</Button>

          <div className="grid grid-cols-3 mt-8 gap-x-4 gap-y-3">
            <TextInput
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
              placeholder="Standard Input"
              onChange={(val) => setText(val)}
              value={text}
            />
            <NumberInput
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
              }
              placeholder="Number Input"
              onChange={(val) => setNumber(val)}
              value={number}
            />
            <PhoneNumberInput
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
              placeholder="Phone Input"
              onChange={(val) => setPhone(val)}
              value={phone}
            />
            <TextAreaInput
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
              placeholder="Text Area Input"
              onChange={(val) => setLongText(val)}
              value={longText}
              allowHorizontalResize={true}
              allowVerticalResize={false}
              allowScroll={true}
            />
          </div>
        </section>
      </main>
    </Page>
  );
}
