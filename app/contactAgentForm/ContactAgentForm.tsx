"use client";

import { Button, Textarea, Label, TextInput } from "flowbite-react";

export default function ContactAgentForm() {
  return (
    <div>
      <div className="container mx-auto m-10">
        <h1 className="text-2xl mt-5 mb-5 font-bold">Contact Agent</h1>
        <hr />
        <form className="flex max-auto flex-col gap-4 mt-10 mb-10">
          <div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="fullName" value="Full Name" />
              </div>
              <TextInput id="fullName" type="text" sizing="md" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phoneNumber" value="Phone Number" />
              </div>
              <TextInput id="phoneNumber" type="text" sizing="md" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={4}
              />
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
