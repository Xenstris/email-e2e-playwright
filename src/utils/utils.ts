import { expect } from '@playwright/test';

export async function pollRequest(
    requestFn: () => Promise<boolean>,
    expectedResult: boolean,
    interval: number = 1000,
    timeout: number = 20000,
): Promise<void> {
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
        const result = await requestFn();

        if (result === expectedResult) {
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, interval));
    }
    throw new Error(`PollRequest failed: Expected result "${expectedResult}" was not achieved within ${timeout} ms.`);
}
