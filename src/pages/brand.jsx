import Page from 'features/page';
import { useState } from 'react';
import TextInput from 'ui/form/input';
import NumberInput from 'ui/form/input/number-input';
import PhoneNumberInput from 'ui/form/input/phone-number-input';

export const colors = [
  { name: 'Primary Color', color: 'bg-primary', lightContent: true },
  { name: 'Accent', color: 'bg-accent', lightContent: false },
  { name: 'Black', color: 'bg-black', lightContent: true },
  { name: 'White', color: 'bg-white border border-2', lightContent: false },
  { name: 'Alternative 1', color: 'bg-alt1', lightContent: true },
  { name: 'Alternative 2', color: 'bg-alt2', lightContent: true },
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
  const [number, setNumber] = useState();
  const [phone, setPhone] = useState();

  return (
    <Page title="Brand" description="Page Branding" canonical="/brand">
      <main className="content text-gray-300">
        <section className="flex flex-col items-center space-y-8 border-b py-12">
          <img src="/vercel.svg" className="p-8 bg-gray-50" />
          <h2>Primary Logo</h2>
        </section>
        <section className="py-12 flex divide-x border-b">
          <div className="flex-1 flex flex-col items-center space-y-4 px-2 py-8">
            <img src="/vercel-white.svg" className="p-6 bg-black" />
            <h2>Logo Variation</h2>
          </div>
          <div className="flex-1 flex flex-col items-center space-y-4 py-8">
            <img src="/favicon.ico" className="p-8" />
            <h2>Submark</h2>
          </div>
        </section>
        <section className="py-12 border-b">
          <div className="flex justify-evenly flex-wrap gap-12">
            {colors.map((color) => {
              return (
                <div key={color.color} className="space-y-8 text-center flex flex-col items-center">
                  <h2 className="text-sm text-gray-400">{color.name}</h2>
                  <div className={`h-28 w-28 rounded-full ${color.color}`}></div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="py-12 border-b">
          <div className="flex justify-center flex-wrap gap-4">
            {colors.map((color) => {
              return (
                <img
                  key={color.color}
                  src={color.lightContent ? '/vercel-white.svg' : '/vercel.svg'}
                  className={`p-8 ${color.color}`}
                />
              );
            })}
          </div>
        </section>
        <section className="py-12 text-gray-700 border-b">
          <div className="mb-8 display text-gray-400 text-xl">Typography</div>
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
          <div className="mb-8 display text-gray-400 text-xl">Components</div>
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary ml-2">Secondary Button</button>

          <div className="grid grid-cols-3 gap-x-4 mt-8">
            <TextInput
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-accent"
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
                  className="h-6 w-6 text-accent"
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
                  className="h-6 w-6 text-accent"
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
          </div>
        </section>
      </main>
    </Page>
  );
}