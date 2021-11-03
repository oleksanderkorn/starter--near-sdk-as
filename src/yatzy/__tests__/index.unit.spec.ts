import { Contract } from "../assembly";
import { VMContext } from "near-sdk-as";
import { ONE_NEAR } from "../../utils";

let contract: Contract;
const accountId = "lkskrnk.testnet";
beforeEach(() => {
  VMContext.setCurrent_account_id(accountId);
  VMContext.setPredecessor_account_id(accountId);
  VMContext.setSigner_account_id(accountId);
  VMContext.setAccount_balance(ONE_NEAR);
  contract = new Contract();
});

describe("Contract", () => {
  // VIEW method tests
  it("Check current points", () => {
    expect(contract.current_points()).toStrictEqual(
      "Score: 0. Points: 1 - 0;2 - 0;3 - 0;4 - 0;5 - 0;6 - 0;"
    );
  });

  it("Check current turn when there is no dice should be empty", () => {
    expect(contract.current_turn()).toStrictEqual("");
  });

  it("Check how to play", () => {
    expect(contract.how_to_play()).toStrictEqual(
      "Players take turns rolling five dice. After each roll, the player chooses which dice to keep, and which to reroll. A player may reroll some or all of the dice up to two times on a turn. The player must put a score or zero into a score box each turn. The game ends when all score boxes are used. The player with the highest total score wins the game."
    );
  });

  // CHANGE method tests

  it("start_round", () => {
    expect(contract.start_round()).toStrictEqual(
      "✅ Data saved. ( storage [ 18 bytes ] )"
    );
  });

  // it("end_round", () => {
  //   expect(contract.write("some-key", "some value")).toStrictEqual(
  //     "✅ Data saved. ( storage [ 18 bytes ] )"
  //   );
  // });

  // it("reset_game", () => {
  //   expect(contract.write("some-key", "some value")).toStrictEqual(
  //     "✅ Data saved. ( storage [ 18 bytes ] )"
  //   );
  // });

  // it("saves data to contract storage", () => {
  //   expect(contract.write("some-key", "some value")).toStrictEqual(
  //     "✅ Data saved. ( storage [ 18 bytes ] )"
  //   );
  // });
});
