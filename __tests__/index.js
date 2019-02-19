function foo() {
  setTimeout(() => {}, 4000);

  new Promise((resolve, reject) => setTimeout(() => reject(new Error('unhandled rejection')), 3000));

  return 1;
}

it('should warn about open handles', done => {
  expect(foo()).toBe(1);
  setTimeout(done, 100);
})
