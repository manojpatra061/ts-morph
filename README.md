## Run the command to see how code gets changed

```bash
npx ts-node refactor.ts
```

- It will manupulate `index.ts` code and keep the changes in `newIndex.ts` file.
- `index.ts` will be unchanged.

## Getting Started

1. clone the repo — `git clone https://github.com/manojpatra061/ts-morph.git`
2. install all dependencies — `npm i`
3. delete the `src/newIndex.ts` file as it's only there to show you the changes.
4. run `npx ts-node refactor.ts` — `refactor.ts` has the changes to make in `index.ts` file
   - it will create `src/newIndex.ts`
