// AUTOGENERATED FILE
// This file was generated from filter.ohm by `ohm generateBundles`.

import type {
  BaseActionDict,
  Grammar,
  NonterminalNode,
  Semantics,
  TerminalNode,
} from 'ohm-js';

export interface FilterActionDict<T> extends BaseActionDict<T> {
  FilterExp?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Fragment_compound?: (
    this: NonterminalNode,
    arg0: NonterminalNode,
    arg1: NonterminalNode,
    arg2: NonterminalNode
  ) => T;
  Fragment?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  CategoryFragment?: (
    this: NonterminalNode,
    arg0: TerminalNode,
    arg1: NonterminalNode,
    arg2: NonterminalNode
  ) => T;
  CompareFragment?: (
    this: NonterminalNode,
    arg0: NonterminalNode,
    arg1: NonterminalNode,
    arg2: NonterminalNode
  ) => T;
  compoundOp?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  startDate?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  categoryOp?: (this: NonterminalNode, arg0: TerminalNode) => T;
  compareOp?: (this: NonterminalNode, arg0: TerminalNode) => T;
  bool?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  date?: (
    this: NonterminalNode,
    arg0: NonterminalNode,
    arg1: NonterminalNode,
    arg2: NonterminalNode,
    arg3: NonterminalNode,
    arg4: TerminalNode,
    arg5: NonterminalNode,
    arg6: NonterminalNode,
    arg7: TerminalNode,
    arg8: NonterminalNode,
    arg9: NonterminalNode
  ) => T;
  and?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  or?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  true?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  false?: (this: NonterminalNode, arg0: NonterminalNode) => T;
}

export interface FilterSemantics extends Semantics {
  addOperation<T>(name: string, actionDict: FilterActionDict<T>): this;
  extendOperation<T>(name: string, actionDict: FilterActionDict<T>): this;
  addAttribute<T>(name: string, actionDict: FilterActionDict<T>): this;
  extendAttribute<T>(name: string, actionDict: FilterActionDict<T>): this;
}

export interface FilterGrammar extends Grammar {
  createSemantics(): FilterSemantics;
  extendSemantics(superSemantics: FilterSemantics): FilterSemantics;
}

declare const grammar: FilterGrammar;
export default grammar;