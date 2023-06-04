"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
const vscode = require("vscode");
function activate(context) {
    console.log("Code-completion-vscode-extension is now active.");
    // Code Completion command
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("code-completion-vscode-extension.codeCompletion", (textEditor, edit, args) => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage("Hello World from Code Completion VSCode Extension!");
        // Add text where the cursor is
        textEditor.edit((editBuilder) => {
            editBuilder.insert(textEditor.selection.active, "Hello World!");
        });
    }));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map