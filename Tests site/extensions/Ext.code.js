(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "Test",
        name: "ExtSite",
	      color1: "#ff7db5",
	      color3: "#ff00ff",
        blocks: [
          {
            opcode: "ternaryOperator",

            blockType: Scratch.BlockType.REPORTER,

            text: "if [A] then [B] else [C]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "true",
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "false",
              },
            },
            allowDropAnywhere: true,
          },
        ],
      };
    }
    ternaryOperator({ A, B, C }) {
      return A ? B : C;
    }

  }

  Scratch.extensions.register(new Extension());
})(Scratch);