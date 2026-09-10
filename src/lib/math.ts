import { defineMdastPlugin } from "satteri";
import temml from "temml";

const err = (e: unknown) => (e instanceof Error ? e.message : String(e));

export const temmlMath = defineMdastPlugin({
	name: "temml-math",
	inlineMath(node, ctx) {
		try {
			const value = temml.renderToString(node.value, { throwOnError: false });
			if (ctx.sourceFormat === "mdx")
				return { raw: value, mdxExpressions: false };
			return { type: "html", value };
		} catch (error) {
			ctx.report({
				message: `temml-math: failed on \`${node.value}\`: ${err(error)}`,
				node,
				severity: "warning",
			});
		}
	},
	math(node, ctx) {
		try {
			const value = `<math-display>${temml.renderToString(node.value, {
				displayMode: true,
				throwOnError: false,
			})}</math-display>`;
			if (ctx.sourceFormat === "mdx")
				return { raw: value, mdxExpressions: false };
			return { type: "html", value };
		} catch (error) {
			ctx.report({
				message: `temml-math: failed on \`${node.value}\`: ${err(error)}`,
				node,
				severity: "warning",
			});
		}
	},
});
