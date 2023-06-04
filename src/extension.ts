// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("Code-completion-vscode-extension is now active.");

  // Code Completion command
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand(
      "code-completion-vscode-extension.codeCompletion",
      (textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit, args: any[]) => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage("Hello World from Code Completion VSCode Extension!");

        // Add text where the cursor is
        textEditor.edit((editBuilder: vscode.TextEditorEdit) => {
          editBuilder.insert(textEditor.selection.active, "Hello World!");
        });
      },
    ),
  );
}

export function deactivate() {}
