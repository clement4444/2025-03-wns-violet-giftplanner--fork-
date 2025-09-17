export function countdownDate(date: Date) {
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    let lastDay = date instanceof Date ? new Date(date.getTime()) : new Date(date);
    let today = new Date();

    // compare whole days by setting local midnight
    lastDay.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // use getTime() so subtraction is between numbers (milliseconds)
    const diffMs = lastDay.getTime() - today.getTime();
    return Math.round(diffMs / MS_PER_DAY);

   


}

export function daysBetween(input: Date | string | number): number {
  const MS_PER_DAY = 24 * 60 * 60 * 1000;

  // normalize without mutating a Date passed in
  const given = input instanceof Date ? new Date(input.getTime()) : new Date(input);
  const today = new Date();

  // compare whole days by setting local midnight
  given.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // use getTime() so subtraction is between numbers (milliseconds)
  const diffMs = today.getTime() - given.getTime();
  return Math.round(diffMs / MS_PER_DAY);
}